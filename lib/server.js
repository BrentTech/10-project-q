'use strict';

const Server = require('socket.io');

class Queue {
  constructor(q) {
    this.name = q;
    this.events = new Set();
    this.q = Queue.io.of(`/${q}`);
    this.q.on('connection', this.connection.bind(this));
  }

  monitorEvents(event) {
    this.events.add(event);
    console.log(this.events.has(event));
  }

  connection (socket) {
    socket.on('subscribe', (event, callback) => {
      if( this.events.has(event) ) {
        socket.join(event);
        callback && callback(undefined, `Subscribed to ${event} in ${this.name}`);
      }
    });
  }

  static start() {
    const PORT = process.env.Q_PORT || 3333;
    Queue.io = new Server(PORT);
    Queue.io.on('connection', socket => {
      socket.on('publish', message => {
        let {queue, event, payload} = message;
        Queue.io.of(queue).to(event).emit('trigger', payload);
      });
    });
  }
}

module.exports = Queue;
