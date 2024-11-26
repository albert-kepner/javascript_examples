function firstNonRepeatingLetter(s) {
    slen = s.length;
    if (slen === 0) return '';
    if (slen === 1) return s;
    const dict = {};
    for (c of s.toLowerCase().split('')) {
        if (dict[c]) {
            dict[c]++;
        } else {
            dict[c] = 1;
        }
    }
    for (c of s.split('')) {
        if (dict[c.toLowerCase()] === 1) {
            return c;
        }
    }
    return '';
}


console.log(firstNonRepeatingLetter('a')) // 'a'
console.log(firstNonRepeatingLetter('stress')) // 't'
console.log(firstNonRepeatingLetter('moonmen')) // 'e'
console.log(firstNonRepeatingLetter('')) // ''
console.log(firstNonRepeatingLetter('abba')) // ''