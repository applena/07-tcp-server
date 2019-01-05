// 'use strict';

// const dm = require('../lib/actions/atDm.js');
// jest.mock('../lib/socketPool.js');
// const socketPool = require('../lib/socketPool.js');
// const events = require('../lib/events');

// const { spawn } = require('child_process');

// const memory = {
//   chatroom: {},
// };

// describe('chatroom service', () => {
//   const std = {
//     out: (data)=>{},
//     err: (data)=>{},
//     close: (data)=>{},
//   };
//   const stdoutSpy = jest.spyOn(std, 'out');

//   beforeAll(() => {
//     // let initialOutput = true;
//     memory.chatroom = spawn(`node`, ['.'], {
//       cwd: __dirname+'/../',
//     });
//     memory.chatroom.stdout.on('data', (data)=>{
//       std.out(data);
//       console.log('!!!!!!!!!!!!!!!!!!!!!!!stdout: ', data.toString());
//     });
//     // chatroom.stderr.on('data', stdCallbacks.stdErr);
//     memory.chatroom.on('close', (data)=>{
//       std.close(data);
//       console.log('!!!!!!!!!!!!!!!!!!!!!!!close: ', data);
//     });
//     return;
//   });
  
//   afterAll(() => {
//     return memory.chatroom.kill();
//   });

//   describe('establishes a server and allows users to join', () => {
//     it('starts the server and listens on port 3001', () =>{
//       // if(initialOutput){
//       expect(stdoutSpy).toHaveBeenCalled();
//       // initialOutput = false;
//       // }
//     });

//     it('assigns new users a uuid', () => {
//     });

//     it('assigns new users with a nickname', () => {

//     });
//   });

//   describe('parses data that the user sends', () => {
//     it('', () => {

//     });

//     it('', () => {

//     });

//     it('', () => {

//     });
//   });

//   // describe('@dm action', () => {

//   //   it('sends nothing if the target user is not valide', () => {
//   //     let commandObject = {
//   //       command:'@dm',
//   //       target:'nobody',
//   //       message:'Hello',
//   //     };
//   //     dm(commandObject, 1);
//   //     expect(socketPool.write).not.toHaveBeenCalled();
//   //   });

//   //   it('sends a message to a valid user', () => {
//   //     let commandObject = {
//   //       command:'@dm',
//   //       target:'two',
//   //       message:'Hello',
//   //     };
//   //     dm(commandObject, 1);
//   //     expect(socketPool.write).toHaveBeenCalled();
//   //   });

//   // });

//   describe('allows users to run different actions', () => {
//     it('sends a message to everyone connected', () => {

//     });

//     it('prints out a list of everyone who is connected', () => {

//     });

//     it('allows you to change your name', () => {

//     });

//     it('quits the chatroom', () => {

//     });

//     it('sends a direct message to a user of your choice', () => {

//     });

//     it('requires you to enter the nickname of the person you want to direct message', () => {

//     });
//   });

//   describe('establishes a server and allows users to join', () => {
//     it('', () => {

//     });

//     it('', () => {

//     });

//     it('', () => {

//     });
//   });

// });

