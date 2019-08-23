FROM node:10-alpine as BUILD
RUN apk update && apk add --no-cache python make g++
COPY . /opt/app
WORKDIR /opt/app
RUN npm ci


FROM node:10-alpine
EXPOSE 3000
WORKDIR /opt/app
COPY --from=BUILD /opt/app .
CMD ["npm", "start"]