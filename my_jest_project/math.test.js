// math.test.js
const add = require('./math');
const createPhoneNumber = require('./phoneNumber');


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test("Fixed tests", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
});