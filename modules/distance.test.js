const distance = require('./distance').distance

//const add = require('./add').add

//Throws error for string input
test('Four values are not strings', () => {
  expect(() => {
    distance(1,4,"cat",2);
  }).toThrow();
});

//Test Formula
test('Shortest Distance', () => {
  expect(distance(1,1,4,5)).toEqual(5);
});



test('Shortest Distance', () => {
  var num = distance(1,1,4,4)
  var fpp = parseFloat(num).toPrecision(1)
  expect(fpp).toEqual("4")
});