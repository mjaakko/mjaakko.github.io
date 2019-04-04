import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import pluralize from "../utils/pluralize";
import { userEvents } from "../utils/githubApi";

const formatDate = date =>
  date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  });

const getRepoURL = repoName => "https://github.com/" + repoName;

const BoldLink = styled.a`
  font-weight: bold;
`;

const GithubRepoLink = ({ repoName }) => (
  <BoldLink href={getRepoURL(repoName)}>{repoName}</BoldLink>
);

const DateSpan = styled.span`
  font-style: italic;
`;

const FormattedDate = ({ date }) => (
  <DateSpan>{formatDate(new Date(date))}</DateSpan>
);

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
    this.state = { events: [], error: null };
  }

  componentDidMount() {
    userEvents(this.props.user)
      .then(events => this.setState({ events: events }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    const content = this.state.error ? (
      <p>{this.state.error}</p>
    ) : this.state.events ? (
      <ul>
        {this.state.events.map(event => {
          if (event.type === "PushEvent") {
            return (
              <Fade>
                <PushEvent event={event} />
              </Fade>
            );
          } else if (
            event.type === "CreateEvent" &&
            event.payload.ref_type === "repository"
          ) {
            return (
              <Fade>
                <CreateEvent event={event} />
              </Fade>
            );
          } else if (
            event.type === "PullRequestEvent" &&
            event.payload.action === "opened"
          ) {
            return (
              <Fade>
                <PullRequestEvent event={event} />
              </Fade>
            );
          } else if (event.type === "ReleaseEvent") {
            return (
              <Fade>
                <ReleaseEvent event={event} />
              </Fade>
            );
          } else if (
            event.type === "IssuesEvent" &&
            event.payload.action === "opened"
          ) {
            return (
              <Fade>
                <IssuesEvent event={event} />
              </Fade>
            );
          } else {
            return null;
          }
        })}
      </ul>
    ) : (
      <div />
    );

    return (
      <div>
        <h3>Activity in GitHub</h3>
        {content}
      </div>
    );
  }
}

export default GithubEvents;
