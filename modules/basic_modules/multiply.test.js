const multiply = require('./multiply').multiply


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
test('throws error on string for both parameters', () => {
  expect(() => {
    multiply("string","string");
  }).toThrow("That isn't a number!");
});
test('throws error on string for 1st parameter', () => {
  expect(() => {
    multiply("string", 2);
  }).toThrow("That isn't a number!");
});
test('throws error on string for 2nd parameter', () => {
  expect(() => {
    multiply(2,"string");
  }).toThrow("That isn't a number!");
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