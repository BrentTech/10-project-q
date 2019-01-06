const io = require('socket.io')(3000);


let database = io.of('/database');



database.on('connection', (socket)=>{
socket.on('create',(payload)=>{
    // console.log(payload);
})
})


