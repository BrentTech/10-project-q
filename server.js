'use strict';

//this file instantiates the server class located in lib
const Q = require('./lib/server.js');
Q.start();


//this is making a new insatnce of the server for every connection
const db = new Q('database');//the database here is the .on('connection)


//monitoring for theses events and if a valid one happens it allows the connections
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');


const network = new Q('network');

network.monitorEvent('attack');
network.monitorEvent('no-service');
