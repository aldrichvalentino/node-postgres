import http from 'http'

import app from './app'

const server = http.createServer(app)

const port = process.env.PORT ?? 3000

function onError (error: any): void {
  if (error.syscall !== 'listen') {
    throw error
  }

  // eslint-disable-next-line
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening (): void {
  const addr = server.address()
  if (addr === null) {
    throw new Error('Address is null')
  }

  // eslint-disable-next-line
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

  console.log('Listening on ' + bind)
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
