import React from "react";
import Fade from 'react-reveal/Fade';
import pluralize from '../utils/pluralize'
import { userEvents } from "../utils/githubApi"

const formatDate = date => date.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric'})

const getRepoURL = repoName => "https://github.com/" + repoName;

const getRepoLink = repoName => (<a href={ getRepoURL(repoName) } style={{fontWeight: 'bold'}}>{ repoName }</a>)

const pushEvent = event => (
    <li>
        Pushed { event.payload.size } { pluralize('commit', 'commits', event.payload.size) } to { getRepoLink(event.repo.name) }
        <br />
        <span style={{fontWeight: 'italic'}}>{ formatDate(new Date(event.created_at)) }</span>
    </li>
)

const createEvent = event => (
    <li>
        Created repository { getRepoLink(event.repo.name) }
        <br />
        <span style={{fontWeight: 'italic'}}>{ formatDate(new Date(event.created_at)) }</span>
    </li>
)

const pullRequestEvent = event => (
    <li>
        Opened pull request <a href={ event.payload.pull_request.html_url } style={{fontWeight: 'bold'}}>{ event.payload.pull_request.title }</a> in { getRepoLink(event.repo.name) }
        <br />
        <span style={{fontWeight: 'italic'}}>{ formatDate(new Date(event.created_at)) }</span>
    </li>
)

const releaseEvent = event => (
    <li>
        Published release <a href={ event.payload.release.html_url } style={{fontWeight: 'bold'}}>{ event.payload.release.name }</a> of { getRepoLink(event.repo.name) }
        <br />
        <span style={{fontWeight: 'italic'}}>{ formatDate(new Date(event.created_at)) }</span>
    </li>
)

const issueEvent = event => (
    <li>
        Opened issue <a href={ event.payload.issue.html_url } style={{fontWeight: 'bold'}}>{ event.payload.issue.title }</a> in { getRepoLink(event.repo.name) }
        <br />
        <span style={{fontWeight: 'italic'}}>{ formatDate(new Date(event.created_at)) }</span>
    </li>
)

class GithubEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {events: [], error: null};
    }

    componentDidMount() {
        userEvents(this.props.user)
            .then(events => this.setState({ events: events }))
            .catch(error => this.setState({ error: error }));
    }

    render() {
        const content = this.state.error ? <p>{this.state.error}</p> :
                            this.state.events ? <ul>{ this.state.events.map(event => {
                                if (event.type === 'PushEvent') {
                                    return (<Fade>{ pushEvent(event) }</Fade>)
                                } else if (event.type === 'CreateEvent' && event.payload.ref_type === 'repository') {
                                    return (<Fade>{ createEvent(event) }</Fade>)
                                } else if (event.type === 'PullRequestEvent' && event.payload.action === 'opened') {
                                    return (<Fade>{pullRequestEvent(event) }</Fade>)
                                } else if (event.type === 'ReleaseEvent') {
                                    return (<Fade>{ releaseEvent(event) }</Fade>)
                                } else if (event.type === 'IssueEvent' && event.payload.action === 'opened') {
                                    return (<Fade>{ issueEvent(event) }</Fade>)
                                } else {
                                    return null
                                }
                            }) }</ul> : <div></div>;

        return (
            <div>
                <h3>Activity in GitHub</h3>
                { content }
            </div>
        );
    }
}

export default GithubEvents;