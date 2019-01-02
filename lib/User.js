'use strict';

const uuid = require('uuid/v4');


//User Model
function User(socket) {
  let id = uuid();
  this.id = id;
  this.nickname = `User-${id}`;
  this.socket = socket;
}

module.exports = User;
