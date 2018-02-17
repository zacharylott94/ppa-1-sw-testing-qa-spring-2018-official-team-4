const distance = require('./distance').distance

//const add = require('./add').add

//Throws error for string input
test('Throws error on string for first input', () => {
  expect(() => {
    distance("cat",1,4,5);
  }).toThrow();
});

test('Throws error on string for second input', () => {
  expect(() => {
    distance(1,"cat",4,5);
  }).toThrow();
});

test('Throws error on string for third input', () => {
  expect(() => {
    distance(1,1,"cat",5);
  }).toThrow();
});

test('Throws error on string for fourth input', () => {
  expect(() => {
    distance(1,1,4,"cat");
  }).toThrow();
});

test('Throws error on multiple strings', () => {
  expect(() => {
    distance(1,"cat",4,"cat");
  }).toThrow();
});

//Test Formula
test('Shortest Distance with a perfect square', () => {
  expect(distance(1,1,4,5)).toEqual(5.0000);
});



test('Shortest Distance with an imperfect square', () => {
  expect(distance(1,1,4,4)).toEqual(4.2426);
});

test('Shortest distance with negative input', () => {
  expect(distance(-1,1,-4,5)).toEqual(5.0000);
});

test('Shortest Distance with decimals', () => {
  expect(distance(1.53566,1.93442,4.124432,5.482372)).toEqual(4.3920);
});

test('Shortest Distance with zeros', () => {
  expect(distance(0,0,0,0)).toEqual(0.000);
});

test('Shortest Distance with ', () => {
  expect(distance(1.53566,0,-4.1432,5.4453482372)).toEqual(7.8677);
});