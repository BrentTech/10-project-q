'use strict';
//this class will make connections to namespaces-->room

// each instance ie db from logger will connect that instance with a room

const io = require('socket.io-client');

class Subscriber {
    constructor (name){
        name = io.connect('http://localhost:3000/letters');
        this.name = name;
    }
    subscribe(room){
        this.name.on('connect', ()=> {
            setInterval(() => {
                console.log('🏈');
                this.name.emit(`http://localhost:3000/${room}`);
            }, 1000);
        });
    }
    
}








numbers.on('connect', ()=> {
    setInterval(() => {
        console.log('🏈');
        numbers.emit('next-number');
    }, 1000);
});

letters.on('connect', ()=> {
    setInterval(() => {
        console.log('🇺🇸');
        letters.emit('next-letter');
    }, 1000);
});


