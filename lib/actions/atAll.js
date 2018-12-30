'use strict';

const commands = require('../commands');
const socketPool = require('../socketPool');

/**
 * This funcitons runs that '@all' method in the commands object that takes in data and a userId. It then cycles through all of the connections in the socketPool object and assigns user to each connection. It then runs the write method on socket with a string comprised of the docketPool nickname and the data - essientially writing the message to everyone along with the user nickname of the person sending the message.
 * 
 * @param {object} data Parsed user data
 * @param {number} userId the unique user id of the user
 * 
 * the write function
 * @param {string} <${socketPool[userId].nickname}>: ${data.payload}\n this user id and the message
 * 
 */

commands['@all'] =  (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};