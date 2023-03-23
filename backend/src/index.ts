// Import alias support
import 'module-alias/register';

// Populate env
// eslint-disable-next-line
require('dotenv').config();

// Server listener
import http from 'http';

// Main application
import app from './app';

const port = process.env.PORT ?? 3000;

http.createServer(app).listen(port);
console.log(`App running at port ${port}`);
