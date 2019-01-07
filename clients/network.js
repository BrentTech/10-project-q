'use strict';

const Connection = require('../lib/subscriber.js');

const networkQueue = new Connection('network');

networkQueue.subscribe('attack', (payload) => {
  console.log('Shields Up!', payload);
});
