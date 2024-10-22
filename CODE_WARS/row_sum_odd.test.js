function rowSumOddNumbers(n) {
    let odd = 1;
    let row_sum = null;
    for(let row = 1; row <= n; row++) {
        row_sum = 0;
        for(let i = 0; i < row; i++) {
            row_sum += odd;
            odd += 2;
        }
    }
    return row_sum
}

test('rowSumOddNumbers', () => {
    row = 2;
    sum = rowSumOddNumbers(row);
    expect(sum).toBe(8);

    row = 5;
    sum = rowSumOddNumbers(row);
    expect(sum).toBe(125);
});