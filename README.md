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
2. [SequelizeJS](http://docs.sequelizejs.com/) - ORM
3. [ExpressJS](https://expressjs.com/) - Web Framework
4. [ReactJS](https://reactjs.org/) - Frontend Framework

# Starting the Project
1. Build the image
``` sh
$ docker-compose build
```
2. Start the image
``` sh
$ docker-compose up
```

# Testing
Use Jest for testing. Create test files with `*.test.js` extensions.

# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

# Author
[Aldrich](https://github.com/aldrichvalentino)

# TODO
- use another container for React SSR, it will be different from the backend
- add linter
- build a simple forum app -> user, register, login, post, comment
- make an infinite scrolling (lazy loading) with SSR
- profile page (CRUD)
