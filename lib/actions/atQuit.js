'use strict';

const commands = require('../commands');
const socketPool = require('../socketPool');

/**
 * This funcitons runs that '@quit' method in the commands object that takes in a userId and disconnects that user id from the socket.
 * 
 * @param {number} userId the unique user id of the user
 * 
 * 
 */

commands['@quit'] =  (data, userId) => {
  socketPool[userId].socket.destroy();
  delete socketPool[userId];
};