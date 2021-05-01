FROM node:lts

# change workdir
WORKDIR /usr/src/app

# copy package.json
COPY package*.json ./

# install production
RUN npm install --only=prod

# copy app
COPY . .

# start app
EXPOSE 3000
CMD [ "node", "./bin/www" ]
