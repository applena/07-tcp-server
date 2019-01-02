const socket = {
  write: () => socketPool.write(),
};


const socketPool = { 
  1: {id:1, nickname: 'one', socket:socket},
  2: {id:2, nickname: 'two', socket:socket},
  3: {id:3, nickname: 'three', socket:socket},
  4: {id:4, nickname: 'four', socket:socket},
};

// time 11:11