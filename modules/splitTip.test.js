const splitTip = require('./splitTip').splitTip
 //NOTE: toPrecision is a formatting function thus it will return the calculation as a string

test('5 people splitting a 23.23 cost', () => {
  var num = splitTip(2, 100)
  var fpp = parseFloat(num).toFixed(2)
  expect(fpp).toBe("57.50");
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