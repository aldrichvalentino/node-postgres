This project is looking for maintainers and is in development for the next version. Read [here](https://github.com/aldrichvalentino/node-postgres/issues/11).

<h1 align="center">
  <br>
  Node PERN stack with Docker
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/aldrichvalentino/node-postgres"><img src="https://api.travis-ci.org/aldrichvalentino/node-postgres.svg?branch=master" alt="travis"></a>
</p>

# Prerequisites

Docker and docker-compose for development.

# Built with

1. [Postgres](https://www.postgresql.org/) - Database
3. [ExpressJS](https://expressjs.com/) - Web Framework
4. [ReactJS](https://reactjs.org/) - Frontend Framework

# Development

1. Start database

```sh
$ docker-compose up
```

2. Run server

```sh
# remember to setup .env
$ cd server && npm i && npm run start:dev
# check localhost:3000
```

3. Run client

```sh
# remember to setup .env
$ cd client && npm i && npm start
# check localhost:8080
```

# Production

1. Build image

Build the image using `docker-compose`. Note: update the `.env` to use database host as `db` (the same as the database container name).
```sh
$ docker-compose -f docker-compose.prod.yml build
```

2. Build frontend

```sh
$ cd client && npm run build
```

3. Run
```sh
$ docker-compose -f docker-compose.prod.yml up
# check localhost:80
```

# Testing

Use Jest for testing. Create test files with `*.test.js` extensions.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# Author

[Aldrich](https://github.com/aldrichvalentino)

# TODO
- update README
- add linter
- fix tests and travis CI
