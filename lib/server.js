'use strict';

let io = null;

class Q {

  constructor(namespace) {
    console.log('called')
    this.io = io;
    this.queue = this.io.of('/' + 'namespace');
    this.queue.on('connection', this.connect.bind(this));
    this.events = [];

  }

  connect(socket) {
    console.log('connected server')
    socket.on('join', (room, callback) => {
      console.log('joined')
      socket.join(room);
      callback && callback(`Joined ${room}`);
    });
  }

  static start() {
    console.log('alive')
    io = require('socket.io')(3000);
  }

  monitorEvent(event) {
    if (event) {
      console.log('alive')
      this.events.push(event);
    }
  }
}

console.log('server file is running');
module.exports = Q;
