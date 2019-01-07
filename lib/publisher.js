'use strict';
const io = require('socket.io-client');
// const Publisher = require('./lib/publisher.js');


class Publisher {
    constructor (){//ie database
        this.io= io;
        // console.log('publish called')
        
    }

    // name room object
    publish(name,room, obj){//room is delete update create
        name = this.io.connect(`http://localhost:3000/${name}`);//connects to a namespace
        name.on('connect', (payload)=>{
            console.log(room)
            name.emit(room, obj)
            // name.emit('join', payload)
        })
    }
}


let Q = new Publisher();
Q.publish('database', 'create', {id: 3});

// console.log()
module.exports = Publisher;
