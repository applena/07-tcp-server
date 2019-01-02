'use strict';

const socketPool = require('../socketPool');
const event = require('../events');

/**
 * This funcitons runs that '@nick' method in the commands object that takes in data and a userId. It assigns the userId to the data target which is the variable that stored the first word after the @nick - also known as the nickname the user wishes to be identified by.
 * 
 * @param {object} data Parsed user data
 * @param {number} userId the unique user id of the user
 * 
 * 
 */


let changeName = (data, userId) => {
  socketPool[userId].nickname = data.target;
  console.log(`name changed to ${data.target}`);
};

event.on('@nick', changeName);

module.exports = changeName;