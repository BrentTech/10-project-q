'use strict';

const io = require('socket.io-client');


class Subscriber {
    constructor (){//ie database
        this.io = io.connect(`http://localhost:3000/database`);
    }
    subscribe(room,cb){//room is delete update create
        this.io.on(room, (payload)=>{
            cb(payload)
        })
    }
}

let Q = new Subscriber();
Q.subscribe('create', (payload)=>{

    console.log(payload);
});

module.exports = Subscriber;
