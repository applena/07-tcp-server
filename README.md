![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 07 - Chatroom TCC

### Author: Lena Eivy

### Links and Resources
* [repo](https://github.com/applena/07-tcp-server)
* [travis](https://travis-ci.com/applena/07-tcp-server.svg?branch=master)

### Modules
#### `commands.js`
##### Exported Values and Methods

###### `commands = {}`
the command module exports an empty command object that holds the commands the user can enter

#### `socketPool.js`
##### Exported Values and Methods

###### `socketPool = {}`
the socketPool module exports an empty command object that holds the socket connection

#### `parse.js`
##### Exported Values and Methods

###### `parse(buffer) -> buffer`
parse is given a buffer that it then turns into a string and breaks aprat that string to store different parts of it in different vaiables. It returns those variable.

#### `actions`
##### Exported Values and Methods

###### `directory`
holds all of the actions that a user can enter

######`atAll.js`
###### Exported Values and Methods

####### `@all(data, id) -> string and number`
sends a message to everyone currently connected to the chat room along with the userId of the person sending the message.

######`atDm.js`
###### Exported Values and Methods

####### `@dm(data, id) -> string and number`
sends a direct message to a certain user along with the userId of the person sending the message

######`atList.js`
###### Exported Values and Methods

####### `@list(data, id) -> string and number`
prints a list of nicknames of everyone who is currently connected to the chatroom

######`atQuit.js`
###### Exported Values and Methods

####### `@quit(data, id) -> string and number`
removes the socket connection and deletes the user from the socketPool


### Setup
#### `.env` requirements
* `PORT` - Port Number 3001

#### Running the app
* `npm i`
* to join the chatroom:
  * in the CLI: nc ip-address-of-server

#### Tests
* `npm run test`

