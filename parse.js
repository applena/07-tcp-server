'use strict';

/**
* Using a buffer, this function turns that buffer into a string
* Then, if the string does not start with an @ symbol, it assigns the first word in the string to command, and the rest of the string to payload.
* It then looks through the payload part of the string and assigns the first word to target and the remaining words to message.
* 
* @param {object} buffer Buffered data from a user
* 
* @returns {object} object containing the four variables as keys with their assigned value
* @returns {string} command, payload, target, message Key values from the object
* 
*/

module.exports = function parse (buffer) {
  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
  return {command,payload,target,message};
};