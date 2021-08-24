'use strict';

const io = require('socket.io')(8001);
let faker = require('faker');

let queuedMessages = {

    orders : {}
}

const caps = io.of('/caps');

console.log('hello im queue running ...............') 


caps.on('connection', socket => {

    console.log('CONNECTED to caps with id : ', socket.id);
    

        let id = faker.datatype.uuid()
        queuedMessages.orders[id] = payload;

        socket.emit('new-order', payload); // telling the server a new order was added
        caps.emit('order', { id: id, payload: queuedMessages.orders[id] });


    

    // ==========================================================
    socket.on('get_all', () => {

        Object.keys(queuedMessages.orders).forEach(id => {
            socket.emit('order', { id: id, payload: queuedMessages.orders[id] })
        });
    });

    // ==========================================================

    socket.on('received', msg => {
        delete queuedMessages.orders[msg.id];
    })

    // ==========================================================

    socket.on('delivered', msg => {


        console.log("messageID:", queuedMessages.orders[msg.id])
    })



});