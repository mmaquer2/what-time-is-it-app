# What Time Is It App ?

[![.github/workflows/run-test.yml](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml/badge.svg)](https://github.com/mmaquer2/what-time-is-it-app/actions/workflows/run-test.yml)


## Project Description
- A simple boilerplate react app to practice devops and CI/CD skills that shows the current date and time on a static web page.
- The project is built around github actions ci/cd pipeline, deployments on aws lightsail running an ubuntu linux server, and automated testing with jest and react testing library.


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

## Deployment with Linux and Nginx:

- see [Linux and Nginx Deployment](./docs/linux-nginx.md)

```bash 

# ssh to the server 
ssh -i <ssh_key_location> <user>@<server>

# update the server
sudo apt-get update

# install nginx
sudo apt install nginx


# verify ngnix 
sudo nginx -t

# enable ngnix on boot
sudo systemctl start nginx
sudo systemctl enable nginx

# if successful, you should see the nginx welcome page when you navigate to your server ip address in a web browser

# install nodejs and npm
sudo apt install npm
sudo apt install -y nodejs

# verify installation 
node -v
npm -v

### Copying the project files to the server
# Option 1: using SCP
# leave the server or open another terminal and copy the react app to the server
scp -i your-key.pem -r /path-to-your-local-react-app ubuntu@your-lightsail-instance-public-ip:/home/ubuntu/

### Option 2: using git and pull project from github
git clone https://github.com/mmaquer2/what-time-is-it-app.git
git clone <your-react-app-repo>

# cd into the project 
cd /home/ubuntu/your-react-app

# install dependencies
npm install
npm run build

# configure nginx
cd /etc/nginx/sites-available
sudo nano your-app-name

```
### create nginx config file
```
server {
    listen 80;
    server_name your-app-name.com www.your-app-name.com;
    root /path/home/ubuntu/your-react-app/build;
    index index.html index.htm;
    
}
```


```bash 
## unlink the default nginx config file
sudo unlink default

# create new symlink to your app 
sudo ln -s /etc/nginx/sites-available/your-app-name /etc/nginx/sites-enabled/your-app-name

# set permissions for www-data
# www-data is the user that runs nginx (if you are using a different user, use that user instead of www-data)

sudo chown -R yourUser:www-data /path/home/ubuntu/your-react-app/build

# or give your user write access to the build folder
sudo chmod -R 775 /path/home/ubuntu/your-react-app/build

# or add www-data to the group (DONT DO THIS FOR THE ROOT FOLDER OR USER!!)
sudo usermod -a -G www-data yourUser


# verify nginx config
sudo nginx -t

# restart nginx
sudo systemctl restart nginx

# open the browser and navigate to your server ip address
# or your domain name if you have one


```



## Resources

- see [AWS Lightsail Deployment](./docs/aws-lightsail.md) 

