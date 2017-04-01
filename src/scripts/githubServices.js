import { fetchGet } from './utils';
import { fakeRepos, fakeIssues } from './fakeData';

export function getRepos(repoName) {
    // return Promise.resolve()
    //     .then(() => fakeRepos);
    const repoURL = `https://api.github.com/search/repositories?q=${repoName}`;
    return fetchGet(repoURL);
}

export function getIssues(owner, repo) {
    // return Promise.resolve()
    //     .then(() => fakeIssues);
    const issueURL = `https://api.github.com/repos/${repo}/${owner}/issues`;
    return fetchGet(issueURL);
}