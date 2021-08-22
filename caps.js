'use strict';
// require('dotenv').config();
const events = require('./events');
let faker = require('faker');

require('./vendor');
require('./driver');

function packageOrder() {
    let payload = {
        store: faker.company.companyName(),
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }

    events.emit('pickup', payload)
    
    /*  using setInterval can cause a memory leak. By using setTimeout you 
    ensure that the next function call won't get triggered until the previous 
    function call has finished.*/
    setTimeout(packageOrder, 5000);
}

packageOrder();

module.exports = packageOrder
