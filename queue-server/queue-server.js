'use strict';

const io = require('socket.io')(5001);
const caps = io.of('/caps');
let faker = require('faker');

let queuedMessages = {

    orders: {}
}


console.log('hello im queue running ...............')

caps.on('connection', socket => {

    console.log('CONNECTED to caps with id : ', socket.id);


    socket.on('pickup', payload => {
        let packageStatus = {
            event: "pickup",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)
        caps.emit('pickup', payload);
    });


    socket.on("in-transit", (payload) => {
        let packageStatus = {
            event: "in-transit",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)

    });

    socket.on("delivered", (payload) => {

        let packageStatus = {
            event: "delivered",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)
        caps.emit('delivered', payload);
    });


    socket.on("missed-order", (payload) => {
        let id = faker.datatype.uuid();
        // console.log('id==============', id)
        queuedMessages.orders[id] = payload;
        // console.log(' queuedMessages.orders[id]==============', queuedMessages.orders)
        socket.emit("added", payload);

    });

    // ==========================================================
    socket.on('getAll', () => {

        Object.keys(queuedMessages.orders).forEach(id => {
            socket.emit('order', { id: id, payload: queuedMessages.orders[id] })
        });
    });

    // ==========================================================

    socket.on('received', msg => {
        delete queuedMessages.orders[msg.id];
    })



});