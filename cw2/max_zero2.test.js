var maxZeroSequence = function (arr) {
    for (len = arr.length; len > 0; len--) {
        for (i = arr.length - len; i >= 0; i--) {
            if (arr.slice(i, i + len).reduce((acc, val) => acc + val, 0) === 0) {
                return arr.slice(i, i + len);
            }
        }
    }
    return [];
}


console.log(maxZeroSequence([-1, -2, 3, 4, 5])) // 15