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

test("5'"+'9"' + "for height and 100 for weight to equal 15.1", () => {
   expect(bmi("5'"+'9"',100)).toBe("You are underweight! Your bmi value is 15.1");
});
test("5'"+'9"' + "for height and 130 for weight to equal 19.7", () => {
  expect(bmi("5'"+'9"',130)).toBe("You are normal weight! Your bmi value is 19.7");
});
test("5'"+'9"' + "for height and 190 for weight to equal 28.7", () => {
  expect(bmi("5'"+'9"',190)).toBe("You are over weight! Your bmi value is 28.7");
});
test("5'"+'9"' + "for height and 200 for weight to equal 30.2", () => {
  expect(bmi("5'"+'9"',200)).toBe("You are obese! Your bmi value is 30.2");
});