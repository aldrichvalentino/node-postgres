FROM node:carbon

# install global
RUN npm install -g npm-run-all nodemon

# create app directory
WORKDIR /opt/app

# install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# expose
EXPOSE 3000

# run command when up
CMD ["npm", "start"]