const add = require('./basic').add
const divide = require('./basic').divide
const multiply = require('./basic').multiply
///Addition
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('adds -1 + 2 to equal 1', () => {
  expect(add(-1, 2)).toBe(1);
});
test('adds 1.2222222 + 2.222323232 to equal 3', () => {
  expect(add(1.2222222, 2.222323232)).toBe(3.444545432);
});

test('throws on string for 1st parameter', () => {
  expect(() => {
    add("string",2);
  }).toThrow();
});

test('throws on string for 2nd parameter', () => {
  expect(() => {
    add(1,"string");
  }).toThrow();
});

test('throws on string for both parameter', () => {
  expect(() => {
    add("string","string");
  }).toThrow();
});
///End Addition 

///Division

test('Divides 2 by 2 to get 1', () => {
  expect(divide(2, 2)).toBe(1);
});
test('Divides -2 by 2 to get 1', () => {
  expect(divide(-2, 2)).toBe(-1);
});
test('Divides -2 by -2 to get 1', () => {
  expect(divide(-2, -2)).toBe(1);
});
test('Divides 5.3 by 2.7 to get 1', () => {
  expect(divide(5.3, 2.7)).toBe(1.9629629629629628);
});

test('throws error on string over zero', () => {
  expect(() => {
    divide("string",0);
  }).toThrow("That isn't a number!");
});

test('throws error on string for y parameter', () => {
  expect(() => {
    divide(2,"string");
  }).toThrow("That isn't a number!");
});

test('throws error on string for x parameter', () => {
  expect(() => {
    divide("string",2);
  }).toThrow("That isn't a number!");
});

test('throws error on string for both parameters', () => {
  expect(() => {
    divide("string","string");
  }).toThrow("That isn't a number!");
});
//end Division 

//Multiplication
test('Multiply 3 * 3 to equal 9', () => {
  expect(multiply(3, 3)).toBe(9);
});