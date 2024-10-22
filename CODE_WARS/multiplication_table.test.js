multiplicationTable = function (size) {
    const oneToSize = Array.from({ length: size }, (_, i) => i + 1);
    const nTimesArray = (n) => Array.from({ length: size }, (_, i) => n * (i + 1));
    let table = [];
    for (let n of oneToSize) {
        table.push(nTimesArray(n));
    }
    return table;
}



test('multiplicationTable', () => {
    expect(multiplicationTable(3)).toStrictEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    expect(multiplicationTable(4)).toStrictEqual([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
    expect(multiplicationTable(5)).toStrictEqual([[1, 2, 3, 4, 5], [2, 4, 6, 8, 10],
         [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]);
    expect(multiplicationTable(6)).toStrictEqual([[1, 2, 3, 4, 5, 6], [2, 4, 6, 8, 10, 12],
         [3, 6, 9, 12, 15, 18], [4, 8, 12, 16, 20, 24],
          [5, 10, 15, 20, 25, 30], [6, 12, 18, 24, 30, 36]]);
    expect(multiplicationTable(7)).toStrictEqual(
        [[1, 2, 3, 4, 5, 6, 7], [2, 4, 6, 8, 10, 12, 14],
         [3, 6, 9, 12, 15, 18, 21], [4, 8, 12, 16, 20, 24, 28], 
         [5, 10, 15, 20, 25, 30, 35], [6, 12, 18, 24, 30, 36, 42], 
         [7, 14, 21, 28, 35, 42, 49]]);
});
