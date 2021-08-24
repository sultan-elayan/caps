'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5001/caps');



console.log('hello im caps running ...............')

socket.on('new-order', payload => {
    console.log('CONNECTED to caps with id : ', socket.id);

    socket.on('pickup', (payload => {

        let packageStatus = {
            event: "pickup",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)
        caps.emit("go-pickup", payload)

    }))

    socket.on('in-transit', (payload => {

        let packageStatus = {
            event: "in-transit",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)
    }))


    socket.on('delivered', (payload => {

        let packageStatus = {
            event: "delivered",
            time: new Date().toISOString(),
            payload
        }
        caps.emit("go-delivered", payload)
        console.log("EVENT", packageStatus)
        console.log("====================== NEW ORDER ==============================")
    }))


    console.log("Thank you for ordering  : ", payload, " to the queue");
    socket.disconnect();



});



module.exports = socket






// +++++++++++++++++++++++++++++ socket io+++++++++++++++++++++++++++++++++++++++++

// 'use strict';
// require('dotenv').config()
// const port = process.env.PORT;
// const io = require('socket.io')(port);
// const caps = io.of('/caps');

// console.log("=============  SERVER START ===============");

// io.on('connection', (socket) => {
//     console.log('CONNECTED general with id : ', socket.id);
// })

// caps.on('connection', (socket) => {

//     console.log('CONNECTED to caps with id : ', socket.id);


//     socket.on('pickup', (payload => {

//         let packageStatus = {
//             event: "pickup",
//             time: new Date().toISOString(),
//             payload
//         }
//         console.log("EVENT", packageStatus)
//         caps.emit("go-pickup", payload)

//     }))

//     socket.on('in-transit', (payload => {

//         let packageStatus = {
//             event: "in-transit",
//             time: new Date().toISOString(),
//             payload
//         }
//         console.log("EVENT", packageStatus)
//     }))


//     socket.on('delivered', (payload => {

//         let packageStatus = {
//             event: "delivered",
//             time: new Date().toISOString(),
//             payload
//         }
//         caps.emit("go-delivered", payload)
//         console.log("EVENT", packageStatus)
//         console.log("====================== NEW ORDER ==============================")
//     }))

// })

// module.exports = caps








// ++++++++++++++++++  TCP ++++++++++++++++++++++++


// 'use strict';

// const events = require('./events');
// require('./driver');
// require('./vendor');

// console.log("=== First Order ===")
// events.on('pickup', (payload=>{

//     let packageStatus = {
//         event: "pickup",
//         time: new Date().toISOString(),
//         payload
//     }
//     console.log("EVENT", packageStatus)
// })) 
// // ====================================================

// events.on('in-transit', (payload=>{

//     let packageStatus = {
//         event: "in-transit",
//         time: new Date().toISOString(),
//         payload
//     }
//     console.log("EVENT", packageStatus)
// })) 

// // ====================================================

// events.on('delivered', (payload=>{

//     let packageStatus = {
//         event: "delivered",
//         time: new Date().toISOString(),
//         payload
//     }
//     console.log("EVENT", packageStatus)
//     console.log("====================== NEW ORDER ==============================")
// })) 


