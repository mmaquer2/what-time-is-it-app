# What Time Is It App ?

## What is this?
- this is a single page app that displays the current date and time

## Why is this?
- this is a simple boilerplate react app to practice devops skills

## How to use this?



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

### Gitlab Pages:

```bash
## step 1: create gitlab repo
## step 2: create gitlab ci file
## step 3: push code to gitlab repo
## step 4: go to gitlab repo settings and enable pages
## step 5: go to gitlab repo settings and enable ci
## step 6: go to gitlab repo settings and enable shared runners
```


## Docker !


```bash
# build the image with docker compose

docker-compose build

# run the image with docker compose
docker-compose up

```