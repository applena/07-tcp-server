'use strict';

require('../socketPool');
const event = require('../events');


let sayHello = (data, userId) => {
  data.payload = 'hello ' + data.payload;
  event.emit('@all', data, userId);
};

event.on('@hello', sayHello);

module.exports = sayHello; //for testing
