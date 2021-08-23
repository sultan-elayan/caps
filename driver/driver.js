'use strict';

const io = require('socket.io-client');
let host = 'http://localhost:8000';
const socket = io.connect(`${host}/caps`);

console.log('hello im driver running ...............')

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

