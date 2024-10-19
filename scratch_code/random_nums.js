function randum_nums(n) {
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(Math.random());
    }
    return nums;
}

function random_ints(n, min, max) {
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return nums;
}


let nums = randum_nums(10);
console.log(nums);

let nums_sorted = nums.sort((a, b) => a - b);
console.log(nums_sorted);

let sorted_ints = random_ints(10, 1, 100).sort((a, b) => a - b);
console.log(sorted_ints);

