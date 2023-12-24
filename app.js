require('dotenv').config();
const colors = require('colors');

const Server = require('./src/server');

const server = new Server();
server.listen();