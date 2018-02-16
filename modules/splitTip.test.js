const splitTip = require('./splitTip').splitTip
  test('integers entered only', () => {
    expect(splitTip(5, 23)).toBe("5.29");
  });
  test('passing integer to guest parameter', () => {
    expect(() => {
    splitTip("string", 23);
  }).toThrow("That isn't a number!");
  });
  test('passing integer to cost parameter', () => {
    expect(() => {
    splitTip(5, "string");
  }).toThrow("That isn't a number!");
  });
  test('passing integer to guest and cost parameter', () => {
    expect(() => {
    splitTip("string", "string");
  }).toThrow("That isn't a number!");
  });
  test('passing negative integer to guest parameter', () => {
    expect(() => {
    splitTip(-5, 23);
  }).toThrow();
  });
  test('passing negative integer to cost parameter', () => {
    expect(() => {
    splitTip(5, -23);
  }).toThrow();
  });
  test('passing negative integer to guest and cost parameter', () => {
    expect(() => {
    splitTip(-5, -23);
  }).toThrow();
  });
  test('passing 0 into guest parameter', () => {
    expect(() => {
    splitTip(0, 23);
  }).toThrow();
  });
  test('passing 0 into guest and cost parameter', () => {
    expect(() => {
    splitTip(0, 0);
  }).toThrow();
  });
