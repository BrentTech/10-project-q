'use strict';

const io = require('socket.io-client');

//this class will listen for an event/connection

//when heard it will return the payload


class Subscriber {
    constructor (){//ie database
        this.io = io;
    }
    subscribe(room){//room is delete update create
        this.io.connect(room);
        console.log('created from subscribe')
    }
    
}

let Q = new Subscriber();
Q.subscribe('create');

module.exports = Subscriber;
