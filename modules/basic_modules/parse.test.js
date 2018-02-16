const parse = require('./parse.js').parse

test('throws on number for the parameter', () => {
    expect(() => {
    parse(1);
    }).toThrow("That isn't a string!");
  });

test('Expects 5 to be in first index', () => {
    expect(parse("5'"+'9"')[1]).toBe(5);
  });


test('Expects to throw error when inches is passed first', () => {
    expect(() => {
        parse("9''5'")
    }).toThrow("You put inches first please put feet then inches!");
  });

  test('Expects to throw error when inches is passed first', () => {
    expect(() => {
        parse()
    }).toThrow(TypeError("That isn't a string!"));
  });

