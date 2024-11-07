function sumStrings(a,b) { 
    // Strip any leading zeros
    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');
    a_rev = a.split('').reverse();
    b_rev = b.split('').reverse();
    a_len = a_rev.length;
    b_len = b_rev.length;
    a_at = (i) => i < a_len ? parseInt(a_rev[i]) : 0;
    b_at = (i) => i < b_len ? parseInt(b_rev[i]) : 0;
    max_len = Math.max(a_len, b_len);
    let carry = 0;
    const result_rev = [];
    for (let i = 0; i < max_len; i++) {
        const digit_sum = a_at(i) + b_at(i) + carry;
        const digit = digit_sum % 10;
        carry = digit_sum >= 10 ? 1 : 0;
        result_rev.push(digit);
    }
    if (carry > 0) {
        result_rev.push(carry);
    }
    return result_rev.reverse().join('');  
}

test('sumStrings', () => {
    expect(sumStrings('123', '456')).toEqual('579');
    expect(sumStrings('123', '4567')).toEqual('4690');
    expect(sumStrings('123', '45678')).toEqual('45801');
});
