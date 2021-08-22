require('../caps');
require('../driver');
require('../vendor');

const event = require('../events');
var faker = require('faker');


describe('caps tests', () => {
  let consoleSpy;
  let payload = {
    store:  faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('test pick up  ', async () => {
    event.emit('pick', payload);
    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('test deliver  ', async () => {
    event.emit('deliver', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('test transit  ', async () => {
    event.emit('transit', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });

  test('test delivered  ', async () => {
    event.emit('delivered', payload);

    await expect(consoleSpy).toHaveBeenCalled();
  });
});