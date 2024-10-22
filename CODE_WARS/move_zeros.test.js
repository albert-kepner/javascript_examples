function moveZeros(arr) {
    let nonzeros = arr.filter(x => x !== 0);
    let zeros = arr.filter(x => x === 0);
    return nonzeros.concat(zeros);
}

test('moveZeros', () => {
    expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    expect(moveZeros([1, 2, 0, 0, 0, 1, 0, 3, 0, 1])).toEqual([1, 2, 1, 3, 1, 0, 0, 0, 0, 0]);
    expect(moveZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(moveZeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(moveZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 1])).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(moveZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});
