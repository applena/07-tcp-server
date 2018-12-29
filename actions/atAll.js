'use strict';

const commands = require('./commands');
const socketPool = require('./socketPool');

/**
 * 
 * 
 * 
 */
commands['@all'] =  (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};