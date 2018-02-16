const subtract = require('./subtract').subtract

test('subtracts 1 from 3 to equal 2', () => {
    expect(subtract(3, 1)).toBe(2);
});

test('subtracts 2 from 0 to equal -2', () => {
    expect(subtract(0,2)).toBe(-2);
});

test('subtracts -2 from -2 to equal 0', () => {
    expect(subtract(-2,-2)).toBe(0);
});

test('subtracts -2 from 2 to equal -4', () => {
    expect(subtract(2,-2)).toBe(4);
});

test('throws on string for 1st parameter', () => {
    expect(() => {
      subtract("string",2);
    }).toThrow("That isn't a number!");
  });
  
  test('throws on string for 2nd parameter', () => {
    expect(() => {
      subtract(1,"string");
    }).toThrow("That isn't a number!");
  });
  
  test('throws on string for both parameter', () => {
    expect(() => {
      subtract("string","string");
    }).toThrow("That isn't a number!");
  });




//NOTE: toPrecision is a formatting function thus it will return the calculation as a string

test('subtracts 1.4444 from 3.8795 to equal 2.4351 Precision: 4', () => {
    var num = subtract(3.8795,1.4444);
    var fpp = parseFloat(num).toPrecision(4);
    expect(fpp).toBe("2.435");
  });

  test('subtracts 4.7 from 10 to equal 5 Precision: 1', () => {
    var num = subtract(10, 4.7);
    var fpp = parseFloat(num).toPrecision(1);
    expect(fpp).toBe("5");
  });

  test('subtracts 5.811 from 3.2 to equal 2.6 Precision: 2', () => {
    var num = subtract(3.2, 5.811);
    var fpp = parseFloat(num).toPrecision(2);
    expect(fpp).toBe("-2.6");
  });
