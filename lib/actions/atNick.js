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


let changeName = (data, userId, socket) => {
  let newName = data.target;
  
  if(!newName){
    console.log('user failed to enter a name');
    return socket.write(`you must enter a nickname\n`);
  }

  for(let connectionId in socketPool){
    //console.log(connectionId, userId, newName, socketPool[connectionId].nickname);
    if(socketPool[connectionId].nickname === newName){
      return socket.write(`that name already exists. please choose a different nickname\n`);
    }
  }
  socketPool[userId].nickname = newName;
  socket.write(`name changed to ${newName}\n`);
  console.log('user name chagned to ', newName, `\n`);
};

event.on('@nick', changeName);

module.exports = changeName;