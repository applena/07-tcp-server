'use strict';

const commands = require('../commands');
const socketPool = require('../socketPool');

/**
 * This funcitons runs that '@dm' method in the commands object that takes in data and a userId and sends a private message to the target user
 * 
 * @param {object} data Parsed user data
 * @param {number} userId the unique user id of the user
 * 
 * the write function
 * @param {string} <${socketPool[userId].nickname}>: ${data.payload}\n this user id and the message
 * 
 */

commands['@dm'] =  (data, userId) => {
  if(socketPool[data.target]){
    let user = socketPool[data.target];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  } else { console.log('user does not exist');}
};