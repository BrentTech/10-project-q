//instantiates the server instance and subscribes to these events
const Q = require('./lib/subscriber.js');

const db = new Q('database');//namespace that this is subscribing to or name value passed to class constructor

db.subscribe('delete', (payload) => {
  console.log('delete happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);//subscribe method will emit a connect event that 'create' will be passed.
});

console.log(db.subscriptions()); 
console.log('logger is running')