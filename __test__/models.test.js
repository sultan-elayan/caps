"use strict";



const io=require('socket.io-client');
const host='http://localhost:8000';
const socket=io.connect(`${host}/caps`);


let payload=
{  store: 'Hyatt - Aufderhar',
orderID: 'f82abacc-9e53-4c54-a6c9-849e66a2828c',
customer: 'Daryl Adams',
address: '1183 Emilia Point'
} 

jest.useFakeTimers();


describe("caps test", () => {
    it('connection',()=>{
        const caps = require('../caps');
        caps.emit('connection',payload);
        expect( caps.emit('connection',payload)).toEqual(true);
    });
});

describe("driver test", () => {
    it('transit',()=>{
        socket.emit('in-transit',payload);
        expect( socket.emit('in-transit',payload).sendBuffer[0].data[1].orderID)
        .toEqual(payload.orderID);
    });

});


describe("vendor test", () => {
    it('transit',()=>{
        socket.emit('delivered',payload);
        expect( socket.emit('delivered',payload).sendBuffer[0].data[1].orderID)
        .toEqual(payload.orderID);
    });

});