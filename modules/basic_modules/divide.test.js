const divide = require('./divide').divide
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

  test('throws divide by zero error', () => {
    expect(() => {
      divide(0,0);
    }).toThrow();
  });
  test('throws divide by zero error', () => {
    expect(() => {
      divide(5.3,0);
    }).toThrow();
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