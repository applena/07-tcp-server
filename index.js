'use strict';

// First Party Modules
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;

// creats a TCP server using NodeJS net module
const server = net.createServer();

// modules
require('./lib/actions');
const parse = require('./lib/parse');
const socketPool = require('./lib/socketPool');
const event = require('./lib/events');
const User = require('./lib/User');

/**
 * Creates a server that listens for a connection
 * 
 * Assigns an id (a uuid), a nickname, and a socket and stores this information in the socketPool object
 * The socket listens for 'data' to be sent and takes a buffer of that data to call the dispatchActions with the socket id and buffer
 * 
 * @param {object} socket The socket connection to the client
 * @param {object} buffer The buffer data that the user sends
 * 
 */

server.on('connection', (socket) => {
  let user = new User(socket);
  socketPool[user.id] = user;

  socket.on('data', (buffer) => dispatchAction(user.id, buffer, socket));
  socket.on('error', (error)=> {console.error();});
  socket.on('close', (had_error) => {delete socketPool[user.id];});
});

/**
 * A function that takes a userID and buffer, parses that buffer data and does a check to see if the parsed buffer data and the typeof commands at the parsed buffer data is a function. If it is, it calls the commands function with the parsed buffer and user ID as parameters.
 * 
 * @param {number} userId A uuid number
 * @param {object} buffer buffer data sent from the user
 * @param {object} socket the connectionn socket from the user
 * 
 */
let dispatchAction = (userId, buffer, socket) => {
  let entry = parse(buffer);
  if(!entry){return;}//ignores empty returns
  event.emit(entry.command, entry, userId, socket);
};

/**
 * Creates a net server that listsens on a given port and sends a console log to confirm that is it listening on that port
 * 
 * @param {number} port A port number
 */
server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
