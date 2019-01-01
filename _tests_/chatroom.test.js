'use strict';

const socketPool = require('../lib/socketPool.js');
//const events = require('../lib/events.js');
const dm = require('../lib/actions/atDm.js');

describe('establishes a server and allows users to join', () => {
  it('assigns new users a uuid', () => {

  });

  it('assigns new users with a nickname', () => {

  });
});

describe('parses data that the user sends', () => {
  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });
});

// describe('@dm action', () => {

//   it('sends nothing if the target user is not valide', () => {
//     let commandObject = {
//       command:'@dm',
//       target:'nobody',
//       message:'Hello',
//     };
//     dm(commandObject, 1);
//     expect(socketPool.write).not.toHaveBeenCalled();
//   });

//   it('sends a message to a valid user', () => {
//     let commandObject = {
//       command:'@dm',
//       target:'two',
//       message:'Hello',
//     };
//     dm(commandObject, 1);
//     expect(socketPool.write).toHaveBeenCalled();
//   });

// });

describe('allows users to run different actions', () => {
  it('sends a message to everyone connected', () => {

  });

  it('prints out a list of everyone who is connected', () => {

  });

  it('allows you to change your name', () => {

  });

  it('quits the chatroom', () => {

  });

  it('sends a direct message to a user of your choice', () => {

  });

  it('requires you to enter the nickname of the person you want to direct message', () => {

  });
});

describe('establishes a server and allows users to join', () => {
  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });
});




