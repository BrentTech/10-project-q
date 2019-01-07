'use strict';

const Connection = require('../lib/subscriber.js');

const databaseQueue = new Connection('database');

databaseQueue.subscribe('delete', (payload) => {
  console.log('DELETE:', payload);
});

databaseQueue.subscribe('delete', (payload) => {
  console.log('CREATE:', payload);
});

console.log(databaseQueue.subscriptions()); 
console.log('logger is running');