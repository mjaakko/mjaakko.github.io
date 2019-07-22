import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import moment from "moment";

import pluralize from "../utils/pluralize";

import LoadingIndicator from "./LoadingIndicator";
import Preconnect from "./Preconnect";
import useGitHubUserEvents from "../hooks/useGitHubUserEvents";
import useContacts from "../hooks/useContacts";

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
  <>
    Pushed {event.payload.size}{" "}
    {pluralize("commit", "commits", event.payload.size)} to{" "}
    <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </>
);

const CreateEvent = ({ event }) => (
  <>
    Created repository <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </>
);

const PullRequestEvent = ({ event }) => (
  <>
    Opened pull request{" "}
    <BoldLink href={event.payload.pull_request.html_url}>
      {event.payload.pull_request.title}
    </BoldLink>{" "}
    in <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </>
);

const ReleaseEvent = ({ event }) => (
  <>
    Published release{" "}
    <BoldLink href={event.payload.release.html_url}>
      {event.payload.release.name}
    </BoldLink>{" "}
    of <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </>
);

const IssuesEvent = ({ event }) => (
  <>
    Opened issue{" "}
    <BoldLink href={event.payload.issue.html_url}>
      {event.payload.issue.title}
    </BoldLink>{" "}
    in <GithubRepoLink repoName={event.repo.name} />
    <br />
    <FormattedDate date={event.created_at} />
  </>
);

export default () => {
  const user = useContacts().find(({ type }) => type === "github").username;
  const { events, error } = useGitHubUserEvents(user);

  return (
    <>
      <Preconnect url="https://api.github.com" />
      <div>
        <h3>Activity in GitHub</h3>
        {!!events || !!error || <LoadingIndicator>Loading</LoadingIndicator>}
        {error && <p>{error}</p>}
        {events && (
          <Fade bottom cascade duration={1200}>
            <ul>
              {events.map(event => {
                if (event.type === "PushEvent") {
                  return (
                    <li key={event.id}>
                      <PushEvent event={event} />
                    </li>
                  );
                } else if (
                  event.type === "CreateEvent" &&
                  event.payload.ref_type === "repository"
                ) {
                  return (
                    <li key={event.id}>
                      <CreateEvent event={event} />
                    </li>
                  );
                } else if (
                  event.type === "PullRequestEvent" &&
                  event.payload.action === "opened"
                ) {
                  return (
                    <li key={event.id}>
                      <PullRequestEvent key={event.id} event={event} />
                    </li>
                  );
                } else if (event.type === "ReleaseEvent") {
                  return (
                    <li key={event.id}>
                      <ReleaseEvent key={event.id} event={event} />
                    </li>
                  );
                } else if (
                  event.type === "IssuesEvent" &&
                  event.payload.action === "opened"
                ) {
                  return (
                    <li key={event.id}>
                      <IssuesEvent key={event.id} event={event} />
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </Fade>
        )}
      </div>
    </>
  );
};
