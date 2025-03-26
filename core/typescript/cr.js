// import { Octokit, App } from 'octokit'
const { Octokit } = require('octokit')

const octokit = new Octokit({
  auth: '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',
})

const response = octokit.request(
  'PATCH /repos/{owner}/{repo}/pulls/{pull_number}',
  {
    owner: 'cra2ycoder',
    repo: 'fullstack-interview-practice',
    pull_number: '1',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }
)

console.log(`response >>>> `, response)
