const email_verifier = require('./email').email_verifier;

test('throws error if input is null', () => {
    expect(() => {
        email_verifier();
    }).toThrow("INVALID: Emails cannot be null!");
});

test('throws error if input is empty', () => {
    expect(() => {
        email_verifier();
    }).toThrow("INVALID: Emails cannot be null!");
});

test('throws error if input is not a string', () => {
    expect(() => {
        email_verifier(123);
    }).toThrow("INVALID: Emails must be a string!");
});

test('throws error if input does not contain the @ symbol', () => {
    expect(() => {
        email_verifier('abc');
    }).toThrow("INVALID: Emails must contain the @ symbol!");
});

test('throws error if input contains two @ symbols', () => {
    expect(() => {
        email_verifier('a@b@c');
    }).toThrow("INVALID: Emails must cannot contain two @ symbols!");
});

test('throws error if input starts with a period', () => {
    expect(() => {
        email_verifier('.abc@a');
    }).toThrow("INVALID: Emails cannot begin with a .");
});

test('throws error if input end with a period', () => {
    expect(() => {
        email_verifier('abc@.');
    }).toThrow("INVALID: Emails cannot end with a .");
});

test('throws error if input before @ is a .', () => {
    expect(() => {
        email_verifier('abc.@j');
    }).toThrow("INVALID: Emails cannot have a . right before the @ symbol");
});

test('throws error if input has two consecutive periods', () => {
    expect(() => {
        email_verifier('abc..k@a');
    }).toThrow("INVALID: Emails cannot contain two consecutive periods");
});

test('throws error if input starts with the numeric character 0', () => {
    expect(() => {
        email_verifier('0abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 1', () => {
    expect(() => {
        email_verifier('1abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 2', () => {
    expect(() => {
        email_verifier('2abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 3', () => {
    expect(() => {
        email_verifier('3abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 4', () => {
    expect(() => {
        email_verifier('4abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 5', () => {
    expect(() => {
        email_verifier('5abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 6', () => {
    expect(() => {
        email_verifier('6abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 7', () => {
    expect(() => {
        email_verifier('7abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 8', () => {
    expect(() => {
        email_verifier('8abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input starts with the numeric character 9', () => {
    expect(() => {
        email_verifier('9abc@a');
    }).toThrow("INVALID: Emails cannot start with a numeric character");
});

test('throws error if input contains "', () => {
    expect(() => {
        email_verifier('ab"c.2@a');
    }).toThrow('INVALID: Emails cannot contain the " symbol');
});

test('throws error if input contains #', () => {
    expect(() => {
        email_verifier('ab#c.2@a');
    }).toThrow('INVALID: Emails cannot contain the # symbol');
});

test('throws error if input contains `', () => {
    expect(() => {
        email_verifier('ab`c.2@a');
    }).toThrow('INVALID: Emails cannot contain the ` symbol');
});

test('throws error if input contains ^', () => {
    expect(() => {
        email_verifier('ab^c.2@a');
    }).toThrow('INVALID: Emails cannot contain the ^ symbol');
});

test("throws error if input contains '", () => {
    expect(() => {
        email_verifier("ab'c.2@a");
    }).toThrow("INVALID: Emails cannot contain the ' symbol");
});

test("throws error if input does not have a domain", () => {
    expect(() => {
        email_verifier('abcdedf@');
    }).toThrow("INVALID: Emails must have a domain");
});

test("throws error if input is only a @ and domain", () => {
    expect(() => {
        email_verifier('@adfsfds');
    }).toThrow("INVALID: Emails must include text before @");
});

test("valid email should be true", () => {
    expect(email_verifier('ben10@yahoo.com')).toBe(true);
  })


