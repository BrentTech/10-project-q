'use strict';
const io = require('socket.io-client');
// const Publisher = require('./lib/publisher.js');


class Publisher {
  constructor (){//ie database
    this.io= require('socket.io-client');
        
  }

  // name room object
  publish(name,room,payload){//room is delete update create
    name = this.io.connect(`http://localhost:3000/${name}`);//connects to a namespace
    name.on('connect', ()=>{
      console.log(room);
      name.emit(room, payload);
    });
  }
}

// // this was used with testServer.
// let Q = new Publisher();
// Q.publish('database', 'create', {id: 3});

// console.log()
module.exports = Publisher;
