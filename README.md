# What Time Is It App ?

[![.github/workflows/run-test.yml](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml/badge.svg)](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml)


## What is this?
- this is a simple boilerplate react app to practice devops skills that shows the current date and time

## How to use this?

- the project is built around github actions ci/cd
- github actions ci/cd


## Development and Installation

```bash

# install dependencies
npm i .

# start app
npm run start

# build app
npm run build

# run tests
npm run test

```

## Deployment Methods:

### Surge.sh 

```bash

# install surge
npm i -g surge

# build app
npm run build

# deploy app
surge ./build

```

### Github Pages

```bash

# build app


# deploy app

```

### Docker

```bash
# build the image with docker compose

docker-compose build

# run the image with docker compose
docker-compose up

```