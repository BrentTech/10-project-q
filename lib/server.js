'use strict';

class Server {
  io = null;
  constructor(namespace) {
    // this.io = null;
    this.queue = io.of('/' + 'namespace');
    this.queue.on('connection', this.connect.bind(this));
  }

  connect(socket) {
    socket.on('join', (room, callback) => {
      socket.join(room);
      callback && callback(`Joined ${room}`);
    });
  }

  static start() {
    this.io = require('socket.io')(3000);
  }

  monitorEvent(event) {
    let events = ['create', 'update', 'delete', 'attack', 'no-service'];
    if( events.includes(event) ) {
      console.log('Hello!');
    }
  }
}

console.log('from server file');
module.exports = Server;
