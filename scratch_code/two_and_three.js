function checkThreeAndTwo(array) {
    const counts = { "a": 0, "b": 0, "c": 0 };
    for (let c of array) {
        counts[c] = counts[c] + 1;
        console.log(`c = ${c}`);
        console.log(`counts[c] = ${counts[c]}`);
    }
    let max_count = 0;
    let min_count = 1000;
    for (let c of ["a", "b", "c"]) {
        if (counts[c] > max_count) {
            max_count = counts[c]
        }
        if (counts[c] < min_count) {
            min_count = counts[c]
        }
    }
    return min_count == 0 &&  max_count == 3;
}

var arr = ["a","c","a","c","b"];

console.log(checkThreeAndTwo(arr));