var maxZeroSequence = function (arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    if(sum === 0) {
        return arr;
    }
    const arr2 = maxHelper(arr, 0, arr.length, sum);
    return arr2;
}


const maxHelper = (array, i, j, sum) => {
    if(sum === 0) {
        return array.slice(i, j);
    }
    if (i === j) {
        return [];
    }
    let a_left = maxHelper(array, i, j - 1, sum - array[j - 1]);
    let a_right = maxHelper(array, i + 1, j, sum - array[i]);
    if (a_right.length >= a_left.length) {
        return a_right;
    } else {
        return a_left;
    }
}

console.log(maxZeroSequence([1, 2, 3, 4, 5])) // 15

console.log(maxZeroSequence([-1, -2, 3, 4, 5])) // 15

