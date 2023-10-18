echo "building app"


echo "installing dependencies"
npm run build

echo "deploying app to server"
scp -r build/* ubuntu@${SERVER_IP}:/home/ubuntu/app

echo "deployment complete"

