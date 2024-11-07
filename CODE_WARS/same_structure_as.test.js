Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.

    function unwind(x) {
        if (isArray(x)) {
            return ['+',x.map(unwind),'-'];
        }
        return 1;
    }
    const aa = unwind(this).toString();
    const bb = unwind(other).toString();
    console.log(`aa = ${aa}`);
    console.log(`bb = ${bb}`);
    return aa == bb
};

let isArray = (x) => Array.isArray(x);

test('1t', () => {
    expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).toEqual(true);
    expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toEqual(false);
    expect(isArray([])).toBe(true);
    expect(isArray(1)).toBe(false);
});