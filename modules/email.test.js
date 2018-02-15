const email_verifier = require('./email');

test('throws error if input is null', () => {
    expect(() => {
        email_verifier();
    }).toThrow("Emails cannot be null!");
});

test('throws error if input is empty', () => {
    expect(() => {
        email_verifier();
    }).toThrow("Emails cannot be null!");
});

test('throws error if input is not a string', () => {
    expect(() => {
        email_verifier(123);
    }).toThrow("Emails must be a string!");
});

test('throws error if input does not contain the @ symbol', () => {
    expect(() => {
        email_verifier('abc');
    }).toThrow("Emails must contain the @ symbol!");
});

test('throws error if input contains two @ symbols', () => {
    expect(() => {
        email_verifier('a@b@c');
    }).toThrow("Emails must cannot contain two @ symbols!");
});

test('throws error if input starts with a period', () => {
    expect(() => {
        email_verifier('.abc@a');
    }).toThrow("Emails cannot begin with a .");
});

test('throws error if input end with a period', () => {
    expect(() => {
        email_verifier('abc@.');
    }).toThrow("Emails cannot end with a .");
});

test('throws error if input before @ is a .', () => {
    expect(() => {
        email_verifier('abc.@j');
    }).toThrow("Emails cannot have a period right before the @ symbol");
});

test('throws error if input has two consecutive periods', () => {
    expect(() => {
        email_verifier('abc..k@a');
    }).toThrow("Emails cannot contain two consecutive periods");
});

test('throws error if input starts with a numeric character', () => {
    expect(() => {
        email_verifier('5abc@a');
    }).toThrow("Emails cannot start with a numeric character");
});

test('throws error if input contains "', () => {
    expect(() => {
        email_verifier('ab"c.2@a');
    }).toThrow('Emails cannot contain "');
});

test('throws error if input contains #', () => {
    expect(() => {
        email_verifier('ab#c.2@a');
    }).toThrow('Emails cannot contain #');
});

test('throws error if input contains `', () => {
    expect(() => {
        email_verifier('ab`c.2@a');
    }).toThrow('Emails cannot contain `');
});

test('throws error if input contains ^', () => {
    expect(() => {
        email_verifier('ab^c.2@a');
    }).toThrow('Emails cannot contain ^');
});

test("throws error if input contains '", () => {
    expect(() => {
        email_verifier("ab'c.2@a");
    }).toThrow("Emails cannot contain '");
});

test("throws error if input does not have a domain", () => {
    expect(() => {
        email_verifier('abcdedf@');
    }).toThrow("Emails must have a domain");
});

test("throws error if input is only a @ and domain", () => {
    expect(() => {
        email_verifier('@adfsfds');
    }).toThrow("Emails must include text before @");
});

test("valid email should be true", () => {
    expect(email_verifier('ben10@yahoo.com')).toBe(true);
  })


