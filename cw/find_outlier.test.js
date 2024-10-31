function findOutlier(integers) {
    let even = integers.filter(x => x % 2 === 0);
    let odd = integers.filter(x => x % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}


test('findOutlier', () => {
    expect(findOutlier([0, 1, 2])).toBe(1);
    expect(findOutlier([1, 2, 3])).toBe(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
    expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
    expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});
        
