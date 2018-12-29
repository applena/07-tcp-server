'use strict';

const commands = require('./commands');
const socketPool = require('./socketPool');

/**
 * 
 * 
 * 
 */
commands['@nick'] =  (data, userId) => {
  socketPool[userId].nickname = data.target;
};