'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5001/caps');

console.log('hello im driver running ...............')

socket.emit("getAll");

socket.on("order", (msg) => {
    console.log("driver delivered you order now!!!: ", msg)
    socket.emit('received', msg)
    setTimeout(() => {
        console.log("DRIVER : picked up order NO.:", msg.id,)

    }, 1000);

    setTimeout(() => {
        console.log("DRIVER : delivered order NO.:", msg.id)


    }, 3000);
});

socket.on("pickup", (payload => {


    setTimeout(() => {
        console.log("DRIVER : picked up order NO.:", payload.orderID,)
        socket.emit("in-transit", payload)
    }, 1000);

    setTimeout(() => {
        console.log("DRIVER : delivered order NO.:", payload.orderID)
        socket.emit("delivered", payload)

    }, 3000);
}))




// ++++++++++++++++++  socket io ++++++++++++++++++++++++

// 'use strict';

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:5001/caps');

// console.log('hello im driver running ...............')

// socket.on("go-pickup", (payload => {


//     setTimeout(() => {
//         console.log("DRIVER : picked up order NO.:", payload.orderID,)
//         socket.emit("in-transit", payload)
//     }, 1000);

//     setTimeout(() => {
//         console.log("DRIVER : delivered order NO.:", payload.orderID)
//         socket.emit("delivered", payload)

//     }, 3000);
// }))


// ++++++++++++++++++  TCP ++++++++++++++++++++++++

// 'use strict';

// const events = require('../events');
// events.on('pickup', (payload => {

//     setTimeout(() => {
//         console.log("DRIVER : picked up order NO.:", payload.orderID,)
//         events.emit("in-transit", payload)
//     }, 1000);

//     setTimeout(() => {
//         console.log("DRIVER : delivered order NO.:", payload.orderID)
//         events.emit("delivered", payload)

//     }, 3000); 
// }))



