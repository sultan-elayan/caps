'use strict';

const events = require('./events');

events.on('pickup', transit)

function transit(payload) {
    setTimeout(() => {
        console.log("DRIVER : picked up order NO.:", payload.orderID,)
        events.emit("in-transit", payload)

        let packageStatus = {
            event: "in-transit",
            time: new Date().toISOString(),
            payload
        }
        console.log("EVENT", packageStatus)

    }, 1000);

    setTimeout(() => {
        events.emit("delivered", payload)
    }, 3000);

}
// ========================  delivering part  ==========================================

events.on("delivered", delivered)

function delivered(payload) {

    console.log("DRIVER : delivered order NO.:", payload.orderID)
    console.log("VENDOR :", "Thank you for delivering order NO.", payload.orderID)

    let packageStatus = {
        event: "delivered",
        time: new Date().toISOString(),
        payload
    }

    console.log("EVENT", packageStatus)

    // to separate orders
    console.log("====================================================================================")

}


