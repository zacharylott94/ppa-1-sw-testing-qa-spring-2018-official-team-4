const add = require('./add').add
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
  