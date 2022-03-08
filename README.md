# Grover frontend challenge

## _New York Times Article Search_

## Packages

- redux, @reduxjs/toolkit, react-redux
- axios
- bootstrap, react-bootstrap, fontello (icons)
- react-router-dom
- lodash.debounce

## Installation

App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the project.

```sh
cd project
npm i
npm run start
```

For production ...

```sh
npm run build
```

#

## How to use

### For access to nty apis:

1- please register on [NTY](https://developer.nytimes.com/) and get the api key
2- rename `.env.example` file to `.env` in project
3- write url address and api key in the `.env` file

```sh
REACT_APP_APP_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json
REACT_APP_API_KEY=YOUR_API_KEY
```

- final api look like this

```sh
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=YOUR_API_KEY
```

4- run the project

```sh
npm run start
```

5- for run test

```sh
npm run test
```

### Thanks

Thank you for this opportunity and I hope to join your team soon :)
here are my <mehdi.kindly@gmail.com> and [website](https://www.mahdifalamarzi.info).
