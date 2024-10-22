function minValue(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length - n + 1; i++) {
        const n_elements = arr.slice(i, i + n);
        const least = Math.min(...n_elements);
        result.push(least);
    }
    return result;
}

test('minValue', () => {
    expect(minValue([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 2, 3, 4]);
    expect(minValue([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3]);
    expect(minValue([1, 2, 3, 4, 5], 4)).toStrictEqual([1, 2]);
    expect(minValue([1, 2, 3, 4, 5], 5)).toStrictEqual([1]);
});
