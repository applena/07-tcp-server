'use strict';

const socketPool = require('../socketPool');
const event = require('../events');

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

let directMessage = (data, userId) => {
  if(socketPool[data.target]){
    let user = socketPool[data.target];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  } else { console.log('user does not exist');}
};

event.on('@dm', directMessage);

module.exports = directMessage;