import React from "react";
import styled from "styled-components";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

import moment from "moment";

import pluralize from "../utils/pluralize";
import { userEvents } from "../utils/githubApi";

import LoadingIndicator from "./LoadingIndicator";
import Preconnect from "./Preconnect";

const getRepoURL = repoName => "https://github.com/" + repoName;

const BoldLink = styled.a`
  font-weight: bold;
`;

const GithubRepoLink = ({ repoName }) => (
  <BoldLink href={getRepoURL(repoName)}>{repoName}</BoldLink>
);

const StyledTime = styled.time`
  font-style: italic;
`;

const FormattedDate = ({ date }) => {
  const d = new Date(date);
  return (
    <StyledTime dateTime={d.toISOString()}>{moment(d).fromNow()}</StyledTime>
  );
};

const PushEvent = ({ event }) => (
  <li>
    Pushed {event.payload.size}{" "}
    {pluralize("commit", "commits", event.payload.size)} to{" "}
    <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </li>
);

const CreateEvent = ({ event }) => (
  <li>
    Created repository <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </li>
);

const PullRequestEvent = ({ event }) => (
  <li>
    Opened pull request{" "}
    <BoldLink href={event.payload.pull_request.html_url}>
      {event.payload.pull_request.title}
    </BoldLink>{" "}
    in <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </li>
);

const ReleaseEvent = ({ event }) => (
  <li>
    Published release{" "}
    <BoldLink href={event.payload.release.html_url}>
      {event.payload.release.name}
    </BoldLink>{" "}
    of <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </li>
);

const IssuesEvent = ({ event }) => (
  <li>
    Opened issue{" "}
    <BoldLink href={event.payload.issue.html_url}>
      {event.payload.issue.title}
    </BoldLink>{" "}
    in <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </li>
);

class GithubEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: null, error: null };
  }

  componentDidMount() {
    userEvents(this.props.user)
      .then(events => this.setState({ events: events }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <>
        <Preconnect url="https://api.github.com" />
        <div>
          <h3>Activity in GitHub</h3>
          {!!this.state.events || !!this.state.error || (
            <LoadingIndicator>Loading</LoadingIndicator>
          )}
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.events && (
            <ul>
              <TransitionGroup appear={true} enter={true}>
                {this.state.events.map(event => {
                  if (event.type === "PushEvent") {
                    return (
                      <Fade key={event.id}>
                        <PushEvent event={event} />
                      </Fade>
                    );
                  } else if (
                    event.type === "CreateEvent" &&
                    event.payload.ref_type === "repository"
                  ) {
                    return (
                      <Fade key={event.id}>
                        <CreateEvent event={event} />
                      </Fade>
                    );
                  } else if (
                    event.type === "PullRequestEvent" &&
                    event.payload.action === "opened"
                  ) {
                    return (
                      <Fade key={event.id}>
                        <PullRequestEvent event={event} />
                      </Fade>
                    );
                  } else if (event.type === "ReleaseEvent") {
                    return (
                      <Fade key={event.id}>
                        <ReleaseEvent event={event} />
                      </Fade>
                    );
                  } else if (
                    event.type === "IssuesEvent" &&
                    event.payload.action === "opened"
                  ) {
                    return (
                      <Fade key={event.id}>
                        <IssuesEvent event={event} />
                      </Fade>
                    );
                  } else {
                    return null;
                  }
                })}
              </TransitionGroup>
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default GithubEvents;
