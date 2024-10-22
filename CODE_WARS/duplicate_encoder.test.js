function duplicateEncode(word){
    // convert word to lowercase
    word = word.toLowerCase();
    // split word into array of characters
    word = word.split('');
    // let word2 be a copy of the array of characters word
    let word2 = word.slice();
    for (let i = 0; i < word.length; i++) {
        // check if character is repeated
        if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
            // replace character with ')'
            word2[i] = ')';
        } else {
            // replace character with '('
            word2[i] = '(';
        }
    }
    // join array of characters into a string
    word2 = word2.join('');
    return word2;
}

test('duplicateEncode', () => {
    word = 'aaab';
    expect(duplicateEncode(word)).toBe(')))(');
    expect(duplicateEncode('din')).toBe("(((");
    expect(duplicateEncode('recede')).toBe("()()()");
    expect(duplicateEncode('Success')).toBe(")())())");
    expect(duplicateEncode('(( @')).toBe("))((");
});
