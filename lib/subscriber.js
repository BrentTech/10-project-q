'use strict';

const io = require('socket.io-client');


class Subscriber {
  constructor (namespace){//ie database
    this.io = require('socket.io-client');
    this.queue = this.io.connect('http://localhost:3000/' + namespace);
    this.queue.on('connection', this.subscribe.bind(this));
  }


//   subscribe(room, callback) {

//     socket.on(room, (callback) => {
//       socket.join(room);
//       callback && callback(`Joined ${room}`);
//     });
//   }


  subscribe(room,cb){//room is delete update create
    this.io.on(room, (payload)=>{
      cb(payload);
    });
  }
}

// let Q = new Subscriber();
// Q.subscribe('create', (payload)=>{

//   console.log(payload);
// });

module.exports = Subscriber;
