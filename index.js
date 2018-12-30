'use strict';

// First Party Modules
const net = require('net');

// Third Party Modules
const uuid = require('uuid/v4');

const port = process.env.PORT || 3001;

// creats a TCP server using NodeJS net module
const server = net.createServer();

// modules
const actions = require('./lib/actions');
const parse = require('./lib/parse');
const socketPool = require('./lib/socketPool');
const commands = require('./lib/commands');

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
  let id = uuid();
  socketPool[id] = {
    id:id,
    nickname: `User-${id}`,
    socket: socket,
  };
  console.log(`${id} joined`);
  socket.on('data', (buffer) => dispatchAction(id, buffer));
  socket.on('error', (error)=> {console.error();});
  socket.on('close', (had_error) => {delete socketPool[id];});
});




/**
 * A function that takes a userID and buffer, parses that buffer data and does a check to see if the parsed buffer data and the typeof commands at the parsed buffer data is a function. If it is, it calls the commands function with the parsed buffer and user ID as parameters.
 * 
 * @param {number} userId A uuid number
 * @param {object} buffer buffer data sent from the user
 * @param {string} entry Parsed buffer data sent from the user
 * @param {number} userId a uuid number
 * 
 */
let dispatchAction = (userId, buffer) => {
  let entry = parse(buffer);
  if ( entry && typeof commands[entry.command] === 'function' ) {
    commands[entry.command](entry, userId);
  }
};

/**
 * Creates a net server that listsens on a given port and sends a console log to confirm that is it listening on that port
 * 
 * @param {number} port A port number
 */
server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});
