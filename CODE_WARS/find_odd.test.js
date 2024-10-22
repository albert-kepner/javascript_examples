function findOdd(A) {
    const count_x = (x) => A.filter(y => y === x).length;
    for (let x of A) {
        if (count_x(x) % 2 !== 0) {
            return x;
        }
    }
    return 0;
}


test('findOdd', () => {
    expect(findOdd([1, 1, 2, 2, 3])).toBe(3);
    expect(findOdd([1, 1, 2, 2, 3, 3, 3])).toBe(3);
    expect(findOdd([1, 1, 2, 2, 3, 3, 3, 3, 3])).toBe(3);
    expect(findOdd([1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3])).toBe(3);
    expect(findOdd([1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3])).toBe(3);
});
