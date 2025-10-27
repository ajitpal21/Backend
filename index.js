require('dotenv').config()
 
const express = require('express')
const app = express()
const port = 3000

const GithubData = {
  "login": "ajitpal21",
  "id": 202176710,
  "node_id": "U_kgDODAz4xg",
  "avatar_url": "https://avatars.githubusercontent.com/u/202176710?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ajitpal21",
  "html_url": "https://github.com/ajitpal21",
  "followers_url": "https://api.github.com/users/ajitpal21/followers",
  "following_url": "https://api.github.com/users/ajitpal21/following{/other_user}",
  "gists_url": "https://api.github.com/users/ajitpal21/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ajitpal21/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ajitpal21/subscriptions",
  "organizations_url": "https://api.github.com/users/ajitpal21/orgs",
  "repos_url": "https://api.github.com/users/ajitpal21/repos",
  "events_url": "https://api.github.com/users/ajitpal21/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ajitpal21/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2025-03-06T19:32:40Z",
  "updated_at": "2025-09-20T11:15:15Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Ajit Pal')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login chai and code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai and code</h2>')
})

app.get('/pal', (req, res) => {
    res.send('<h2>I am influencer.</h2>')
})

app.get('/github', (req, res) => {
    res.json(GithubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
