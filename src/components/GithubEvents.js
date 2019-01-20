import React from "react";
import Fade from 'react-reveal/Fade';
import pluralize from '../utils/pluralize'
import { userEvents } from "../utils/githubApi"

const formatDate = date => date.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric'})

const getRepoURL = repoName => "https://github.com/" + repoName;

const GithubRepoLink = ({repoName}) => (<a href={ getRepoURL(repoName) } style={{fontWeight: 'bold'}}>{ repoName }</a>)

const FormattedDate = ({date}) => (<span style={{fontWeight: 'italic'}}>{ formatDate(new Date(date)) }</span>)

const PushEvent = ({event}) => (
    <li>
        Pushed { event.payload.size } { pluralize('commit', 'commits', event.payload.size) } to <GithubRepoLink repoName={ event.repo.name }></GithubRepoLink>
        <br />
        <FormattedDate date={ event.created_at }></FormattedDate>
    </li>
)

const CreateEvent = ({event}) => (
    <li>
        Created repository <GithubRepoLink repoName={ event.repo.name }></GithubRepoLink>
        <br />
        <FormattedDate date={ event.created_at }></FormattedDate>
    </li>
)

const PullRequestEvent = ({event}) => (
    <li>
        Opened pull request <a href={ event.payload.pull_request.html_url } style={{fontWeight: 'bold'}}>{ event.payload.pull_request.title }</a> in <GithubRepoLink repoName={ event.repo.name }></GithubRepoLink>
        <br />
        <FormattedDate date={ event.created_at }></FormattedDate>
    </li>
)

const ReleaseEvent = ({event}) => (
    <li>
        Published release <a href={ event.payload.release.html_url } style={{fontWeight: 'bold'}}>{ event.payload.release.name }</a> of <GithubRepoLink repoName={ event.repo.name }></GithubRepoLink>
        <br />
        <FormattedDate date={ event.created_at }></FormattedDate>
    </li>
)

const IssueEvent = ({event}) => (
    <li>
        Opened issue <a href={ event.payload.issue.html_url } style={{fontWeight: 'bold'}}>{ event.payload.issue.title }</a> in <GithubRepoLink repoName={ event.repo.name }></GithubRepoLink>
        <br />
        <FormattedDate date={ event.created_at }></FormattedDate>
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
                                    return (<Fade><PushEvent event={ event }></PushEvent></Fade>)
                                } else if (event.type === 'CreateEvent' && event.payload.ref_type === 'repository') {
                                    return (<Fade><CreateEvent event={ event }></CreateEvent></Fade>)
                                } else if (event.type === 'PullRequestEvent' && event.payload.action === 'opened') {
                                    return (<Fade><PullRequestEvent event={ event }></PullRequestEvent></Fade>)
                                } else if (event.type === 'ReleaseEvent') {
                                    return (<Fade><ReleaseEvent event={ event }></ReleaseEvent></Fade>)
                                } else if (event.type === 'IssueEvent' && event.payload.action === 'opened') {
                                    return (<Fade><IssueEvent event={ event }></IssueEvent></Fade>)
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