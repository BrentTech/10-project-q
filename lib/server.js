'use strict';

let io = null;

class Q {

  constructor(namespace) {
    // if (['network', 'database'].includes(namespace)) {
    this.io = io;
    this.queue = this.io.of('/' + 'namespace');
    this.queue.on('connection', this.connect.bind(this));
    this.events = [];
    // } else {
    //   console.log('Please enter a valid Queue');
    // }
  }

  connect(socket) {
    socket.on('join', (room, callback) => {
      socket.join(room);
      callback && callback(`Joined ${room}`);
    });
  }

  static start() {
    io = require('socket.io')(3000);
  }

  monitorEvent(event) {
    if (event) {
      this.events.push(event);
    }
  }
}

console.log('from server file');
module.exports = Q;
