'use strict';

const io = require('socket.io-client');

const SERVER = process.env.Q_SERVER || 'http://localhost:3333';

class ClientConnector {
  constructor(q) {
    this.q = q;

  }

  subscribe(event, callback) {
    const socket = io.connect(`${SERVER}/${this.q}`);
    socket.emit('subscribe', event, (err, callback) => {
      if (err) { console.error(err); }
      else { console.log(status); }
    });
    socket.on('trigger', callback);
  }

}

module.exports = ClientConnector;



// 'use strict';

// const io = require('socket.io-client');

// class Subscriber {
//   constructor (namespace){//ie database
//     this.io = require('socket.io-client');
//     this.queue = this.io.connect('http://localhost:3000/' + namespace);
//     this.queue.on('connection', this.subscribe.bind(this));
//   }


// //   subscribe(room, callback) {

// //     socket.on(room, (callback) => {
// //       socket.join(room);
// //       callback && callback(`Joined ${room}`);
// //     });
// //   }


//   subscribe(room,cb){
//     this.queue.on(room, (payload)=>{
//         console.log('called')
//       cb(payload);
//     })

//   }
//   subscriptions(){
//     //   console.log(this.queue.id)
//   }
// }

// // let Q = new Subscriber();
// // Q.subscribe('create', (payload)=>{

// //   console.log(payload);
// // });

// module.exports = Subscriber;
