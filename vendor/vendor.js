'use strict';

const io = require('socket.io-client');
let host = 'http://localhost:8000';
let faker = require('faker');
const socket = io.connect(`${host}/caps`);


console.log('hello im vendor running ...............')

setInterval(function () {
    let payload = {
        store: faker.company.companyName(),
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    socket.emit("pickup", payload)

}, 5000);


socket.on("delivered", (payload) => {

    console.log("VENDOR :", "Thank you for delivering order NO.", payload.orderID)
})
// ++++++++++++++++++  TCP ++++++++++++++++++++++++

// 'use strict';
// const events = require('./events');
// let faker = require('faker');

// setInterval(function(){ 
//     let payload = {
//         store: faker.company.companyName(),
//         orderID: faker.datatype.uuid(),
//         customer: faker.name.findName(),
//         address: faker.address.streetAddress()
//     }   
//     events.emit("pickup", payload)

// }, 5000);

// events.on("delivered", (payload) => {

//     console.log("VENDOR :", "Thank you for delivering order NO.", payload.orderID)
// })
