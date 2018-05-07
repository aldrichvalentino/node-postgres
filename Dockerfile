FROM node:carbon

# install global
RUN npm install -g nodemon
RUN npm install -g mysql2
RUN npm install -g webpack@^4.0.0
# RUN npm install -D webpack-cli

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