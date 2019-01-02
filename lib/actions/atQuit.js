'use strict';

const socketPool = require('../socketPool');
const event = require('../events');

/**
 * This funcitons runs that '@quit' method in the commands object that takes in a userId and disconnects that user id from the socket.
 * 
 * @param {number} userId the unique user id of the user
 * 
 * 
 */


let quit = (data, userId) => {
  socketPool[userId].socket.destroy();
  delete socketPool[userId];
};

event.on('@quit', quit);

module.exports = quit;