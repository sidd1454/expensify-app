const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test(`should show the name sid`, () => {
    const result = generateGreeting('Sid');
    expect(result).toBe('Hello Sid!');
});

test(`should generate no name`, () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});