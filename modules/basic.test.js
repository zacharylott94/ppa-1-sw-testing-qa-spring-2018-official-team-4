const add = require('./basic').add
const divide = require('./basic').divide
const multiply = require('./basic').multiply
///Addition
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('adds 1 + 0 to equal 1', () => {
  expect(add(1, 0)).toBe(1);
});
test('adds -1 + 2 to equal 1', () => {
  expect(add(-1, 2)).toBe(1);
});
test('adds 1 + -2 to equal -1', () => {
  expect(add(1, -2)).toBe(-1);
});
test('adds -1 + -2 to equal -3', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('adds 1.2222222 + 2.222323232 to equal 3.444545432', () => {
  expect(add(1.2222222, 2.222323232)).toBe(3.444545432);
});
//NOTE: toPrecision is a formatting function thus it will return the calculation as a string
test('adds 1.2222222 + 2.222323232 to equal 3 Precision: 1', () => {
  var num = add(1.2222222, 2.222323232)
  var fpp = parseFloat(num).toPrecision(1)
  expect(fpp).toBe("3");
});
test('adds 1.2222222 + 2.222323232 to equal 3.4 Precision: 2', () => {
  var num = add(1.2222222, 2.222323232)
  var fpp = parseFloat(num).toPrecision(2)
  expect(fpp).toBe("3.4");
});
test('adds 1.2222222 + 2.222323232 to equal 3.44 Precision: 3', () => {
  var num = add(1.2222222, 2.222323232)
  var fpp = parseFloat(num).toPrecision(3)
  expect(fpp).toBe("3.44");
});
test('adds 1.2222222 + 2.222323232 to equal 3.445 Precision: 4', () => {
  var num = add(1.2222222, 2.222323232)
  var fpp = parseFloat(num).toPrecision(4)
  expect(fpp).toBe("3.445");
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
test('Divides -2 by 2 to get -1', () => {
  expect(divide(-2, 2)).toBe(-1);
});
test('Divides 2 by -2 to get -1', () => {
  expect(divide(2, -2)).toBe(-1);
});
test('Divides -2 by -2 to get 1', () => {
  expect(divide(-2, -2)).toBe(1);
});
test('Divides 5.3 by 2.7 to get 1.9629629629629628 ', () => {
  expect(divide(5.3, 2.7)).toBe(1.9629629629629628);
});

//NOTE: toPrecision is a formatting function thus it will return the calculation as a string
test('Divides 5.3 by 2.7 to get 2 Precision:1', () => {
  var num = divide(5.3, 2.7)
  var fpp = parseFloat(num).toPrecision(1)
  expect(fpp).toBe("2");
});
test('Divides 5.3 by 2.7 to get 2.0 Precision:2', () => {
  var num = divide(5.3, 2.7)
  var fpp = parseFloat(num).toPrecision(2)
  expect(fpp).toBe("2.0");
});
test('Divides 5.3 by 2.7 to get 1.96 Precision:3', () => {
  var num = divide(5.3, 2.7)
  var fpp = parseFloat(num).toPrecision(3)
  expect(fpp).toBe("1.96");
});
test('Divides 5.3 by 2.7 to get 1.963 Precision:4', () => {
  var num = divide(5.3, 2.7)
  var fpp = parseFloat(num).toPrecision(4)
  expect(fpp).toBe( "1.963");
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
test('Multiply 999 * 0 to equal 0', () => {
  expect(multiply(999, 0)).toBe(0);
});
test('Multiply 0 * 99999 to equal 0', () => {
  expect(multiply(0, 99999)).toBe(0);
});
test('Multiply -4 * -4 to equal 16', () => {
  expect(multiply(-4, -4)).toBe(16);
});
test('Multiply -4 * 4 to equal -16', () => {
  expect(multiply(-4, 4)).toBe(-16);
});
test('Multiply 4 * -4 to equal -16', () => {
  expect(multiply(4, -4)).toBe(-16);
});
//NOTE: toPrecision is a formatting function thus it will return the calculation as a string
test('Multiply 3.7 * 4.9 to equal 2e+1 Precision:1', () => {
  var num = multiply(3.7, 4.9)
  var fpp = parseFloat(num).toPrecision(1)
  expect(fpp).toBe("2e+1");
});
test('Multiply 3.7 * 4.9 to equal 18 Precision:2', () => {
  var num = multiply(3.7, 4.9)
  var fpp = parseFloat(num).toPrecision(2)
  expect(fpp).toBe("18");
});
test('Multiply 3.7 * 4.9 to equal 18.1 Precision:3', () => {
  var num = multiply(3.7, 4.9)
  var fpp = parseFloat(num).toPrecision(3)
  expect(fpp).toBe("18.1");
});
test('Multiply 3.7 * 4.9 to equal 18.13 Precision:4', () => {
  var num = multiply(3.7, 4.9)
  var fpp = parseFloat(num).toPrecision(4)
  expect(fpp).toBe("18.13");
});