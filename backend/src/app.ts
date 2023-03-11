import express from 'express'
// import * as awilix from 'awilix'

// eslint-disable-next-line
require('dotenv').config()

const app = express()

app.get('/', (req, res, next) => {
  res.status(200)
  res.json({
    message: 'OK'
  })
})

export default app
