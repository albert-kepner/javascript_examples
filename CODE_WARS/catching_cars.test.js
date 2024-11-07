function isInteresting(number, awesomePhrases) {
    function isGood(number) {
        if(number <= 99) return false;
        const str = number.toString();
        if(str === str.split('').reverse().join('')) return true;
        if(str.split('').every((x) => x === '0')) return true;
        if(str.slice(1).split('').every((x) => x === '0')) return true;
        const c0 = str[0];
        if(str.slice(1).split('').every((x) => x === c0)) return true;
        if(isIncrementing(str)) return true;
        if(isDecrementing(str)) return true;
        if(awesomePhrases.includes(number)) return true;
        if(isIncrementing(str.slice(0,-1)) && str.slice(-2) === '90') return true;
    }

    function isIncrementing(str) {
        const nums = str.split('').map((x) => parseInt(x));
        for(let i = 1; i < nums.length; i++) {
            if(nums[i] !== nums[i-1] + 1) return false;
        }
        return true;
    }

    function isDecrementing(str) {
        return isIncrementing(reverse(str));
    }

    function reverse(str) {
        return str.split('').reverse().join('');
    }

    if(isGood(number)) return 2;
    if(isGood(number + 1) || isGood(number + 2)) return 1;
    return 0;
  }

  test('isInteresting', () => {
    expect(isInteresting(3, [1337, 256])).toEqual(0);
    expect(isInteresting(1336, [1337, 256])).toEqual(1);
    expect(isInteresting(1337, [1337, 256])).toEqual(2);
    expect(isInteresting(11208, [1337, 256])).toEqual(0);
    expect(isInteresting(11209, [1337, 256])).toEqual(1);
    expect(isInteresting(11210, [1337, 256])).toEqual(1);
    expect(isInteresting(11211, [1337, 256])).toEqual(2);
    expect(isInteresting(11212, [1337, 256])).toEqual(0);
    expect(isInteresting(123454321, [1337, 256])).toEqual(2);
    expect(isInteresting(123456789, [1337, 256])).toEqual(2); 
    expect(isInteresting(9876, [1337, 256])).toEqual(2);
    expect(isInteresting(67890, [1337, 256])).toEqual(2);
  });

