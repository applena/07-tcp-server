'use strict';

const socketPool = require('../socketPool');
const event = require('../events');

/**
 * This funcitons runs that '@list' method in the commands object that takes in a userId. It then cycles through all of the connections in the socketPool object and lists sends a list of the people connected to the user.
 * 
 * @param {number} userId the unique user id of the user
 * 
 * the write function
 * @param {string} user list of the open connections
 * 
 */

let list = (data, userId) => {
  let me = socketPool[userId];
  for( let id in socketPool ) {
    let user = socketPool[id].nickname;
    me.socket.write(`${user}\n`);
  }
};

event.on('@list', list);

module.exports = list;