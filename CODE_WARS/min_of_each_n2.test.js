function minValue(arr, n) {
    let result = [];
    let least_pos = null;
    let least_value = null;
    let i = null;
    function leastInWindow() {
        if(least_value === null || least_pos < i) {
            least_value = null;
            least_pos = null;
            leastInWindowFull();
        } else {
            if (arr[i + n - 1] < least_value) {
                least_value = arr[i + n - 1];
                least_pos = i + n - 1;
            }
        }
    }
    function leastInWindowFull() {
        for (let j = i; j < i + n; j++) {
            if (least_value === null || arr[j] < least_value) {
                least_value = arr[j];
                least_pos = j;
            }
        }
    }
    for (i = 0; i < arr.length - n + 1; i++) {
        leastInWindow();
        result.push(least_value);
    }
    return result;
}

test('minValue', () => {
    expect(minValue([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 2, 3, 4]);
    expect(minValue([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 3]);
    expect(minValue([1, 2, 3, 4, 5], 4)).toStrictEqual([1, 2]);
    expect(minValue([1, 2, 3, 4, 5], 5)).toStrictEqual([1]);
});
