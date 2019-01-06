const io = require('socket.io')(3000);


let database = io.of('/database');//works because server will be listening on specific namespaces and events



database.on('connection', (socket)=>{
socket.on('create',(payload)=>{
    database.emit('create', payload)
})
})


//database.on('connection', (socket)=>{
// socket.on('create',(payload)=>{
//     // console.log('called')
//     socket.join('create', () => {
//         let rooms = Object.keys(socket.rooms);
//         console.log(rooms); // [ <socket.id>, 'room 237' ]
//       });
    
// })
// })