'use strict';

const Server = require('socket.io');

class Queue {
  constructor(q) {
    this.name = q;
    this.events = new Set();
    this.q = Queue.io.of(`/${q}`);
    this.q.on('connection', socket => {
      if( this.events.has(event) ) {
        socket.on('subscribe', (event, callback) => {
          socket.join(event);
          callback && callback(undefined, `Subscribed to ${event} in ${this.name}`);
        });
      }
    });
  }

  monitorEvents(event) {
    this.events.add(event);
    //this could be an array
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




// 'use strict';

// let io = null;

// class Q {

//   constructor(namespace) {
//     console.log('called')
//     this.io = io;
//     this.queue = this.io.of('/' + 'namespace');
//     this.queue.on('connection', this.connect.bind(this));
//     this.events = [];

//   }

//   connect(socket) {
//     console.log('connected server')
//     socket.on('join', (room, callback) => {
//       console.log('joined')
//       socket.join(room);
//       callback && callback(`Joined ${room}`);
//     });
//   }

//   static start() {
//     console.log('alive')
//     io = require('socket.io')(3000);
//   }

//   monitorEvent(event) {
//     if (event) {
//       console.log('alive')
//       this.events.push(event);
//     }
//   }
// }

// console.log('server file is running');
// module.exports = Q;
