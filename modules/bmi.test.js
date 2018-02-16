const bmi = require('./bmi').bmi

test('throws on string for 1st parameter', () => {
  expect(() => {
    bmi("string",2);
  }).toThrow();
});

test('throws on string for 2nd parameter', () => {
  expect(() => {
    bmi(1,"string");
  }).toThrow();
});

test('throws on string for both parameter', () => {
  expect(() => {
    bmi("string","string");
  }).toThrow();
});