FROM mhart/alpine-node:10
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# Only copy over the node pieces we need from the above image
FROM mhart/alpine-node:slim-10
WORKDIR /app
COPY --from=0 /app .
COPY . .
EXPOSE 3000
CMD ["node", "scripts/start.js"]