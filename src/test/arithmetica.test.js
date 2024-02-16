const { add } = require("../arithmetica");
const { sub } = require("../arithmetica");


test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('222 + 333 is equal to 555', () => {
    expect(add(222, 333)).toBe(555);
});

test('666 - 333 is equal to 333', () => {
    expect(sub(666, 333)).toBe(333);
});

test('6 - 3 is equal to 3', () => {
    expect(sub(6, 3)).toBe(3);
});

