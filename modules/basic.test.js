const add = require('./basic').add

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