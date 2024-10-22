var uniqueInOrder=function(iterable) {
    const result = [];  
    if (typeof iterable === 'string') {
        iterable = iterable.split('');
    }
    let prev = null;
    for (a of iterable) {
        if (a !== prev) {
            result.push(a);
            prev = a;
        }
    }
    return result;
}

test('uniqueInOrder', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    expect(uniqueInOrder('ABBCcAD')).toStrictEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    expect(uniqueInOrder([1,2,2,3,3])).toStrictEqual([1,2,3]);
    expect(uniqueInOrder([])).toStrictEqual([]);
});

