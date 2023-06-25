# What Time Is It App ?

[![.github/workflows/run-test.yml](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml/badge.svg)](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml)


## Project Description
- This is a simple boilerplate react app to practice devops skills that shows the current date and time
- the project is built around github actions ci/cd pipeline

### Resources:
- https://testing-library.com/


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


### AWS Lightsail

```bash

# update ubuntu packages
sudo apt-get update


# install nodejs
sudo apt-get install nodejs

# install npm
sudo apt-get install npm


# clone github repo to /var/www dir, install dependencies, build app
git --version # check if git is installed
cd /var/www
cd [Your Repository Name]
sudo npm install
sudo npm run build


# install nginx
sudo apt-get install nginx


# configure nginx to serve static files from /var/www/build

# using vim


# deploy app by starting nginx
sudo service nginx start

# stop nginx or restart server
sudo service nginx stop


# setting up SSL with certbot
sudo apt-get install certbot python3-certbot-nginx

```

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