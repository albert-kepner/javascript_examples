function digitalRoot(n) {
    // ...
    if (n <= 9) {
        return n;
    }
    digits = [];
    while (n > 9) {
        d = n % 10;
        n = Math.floor(n / 10);
        digits.push(d);
    }
    digits.push(n)
    function root(digits) {
        sum = digits.reduce((a, b) => a + b, 0)
        if (sum > 9) {
            return digitalRoot(sum)
        } else {
            return sum
        }
    }
    return root(digits)
}

let digits = [1, 2, 3];
let sum = digits.reduce((a, b) => a + b, 0);
let msg = `sum = ${sum}`;
console.log(msg);

let sum2 = digitalRoot(7);
console.log('sum2 = '+sum2);

let sum3 = digitalRoot(11);
console.log('sum3 = ' + sum3);