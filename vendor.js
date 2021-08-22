'use strict';

const events = require('./events');
let faker = require('faker');

events.on('pickup', pickup)

function pickup(payload) {

    let packageStatus = {
        event: "pickup",
        time: new Date().toISOString(),
        payload
    }
    console.log("EVENT", packageStatus)
}




