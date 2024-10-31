function generateHashtag(str) {
    // Check if the input string is empty or consists of only whitespace
    if (str.trim() === '') {
        return false;
    }

    // Capitalize the first letter of each word and join them together
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = '#' + capitalizedWords.join('');

    // Check if the resulting hashtag is longer than 140 characters
    if (hashtag.length > 140) {
        return false;
    }

    return hashtag;
}

// please provide a test using jest
test('generateHashtag', () => {
    expect(generateHashtag('')).toBe(false);
    expect(generateHashtag(' ')).toBe(false);
    expect(generateHashtag('a')).toBe('#A');
    expect(generateHashtag('a b')).toBe('#AB');
    expect(generateHashtag('a b c')).toBe('#ABC');
    expect(generateHashtag('a b c d')).toBe('#ABCD');
    expect(generateHashtag('a b c d e')).toBe('#ABCDE');
    expect(generateHashtag('a b c d e f')).toBe('#ABCDEF');
    expect(generateHashtag('a b c d e f g')).toBe('#ABCDEFG');
    expect(generateHashtag('a b c d e f g h')).toBe('#ABCDEFGH');
    expect(generateHashtag('a b c d e f g h i')).toBe('#ABCDEFGHI');
    expect(generateHashtag('a b c d e f g h i j')).toBe('#ABCDEFGHIJ');
    expect(generateHashtag('a b c d e f g h i j k')).toBe('#ABCDEFGHIJK');
    expect(generateHashtag('a b c d e f g h i j k l')).toBe('#ABCDEFGHIJKL');
    expect(generateHashtag('a b c d e f g h i j k l m')).toBe('#ABCDEFGHIJKLM');
    expect(generateHashtag('a b c d e f g h i j k l m n')).toBe('#ABCDEFGHIJKLMN');
    expect(generateHashtag('a b c d e f g h i j k l m n o')).toBe('#ABCDEFGHIJKLMNO');
    expect(generateHashtag('a b c d e f g h i j k l m n o p')).toBe('#ABCDEFGHIJKLMNOP');
    expect(generateHashtag('a b c d e f g h i j k l m n o p q')).toBe('#ABCDEFGHIJKLMNOPQ');
    expect(generateHashtag('a b c d e f g h i j k l m n o p q r')).toBe('#ABCDEFGHIJKLMNOPQR');
    expect(generateHashtag('a b c d e f g h i j k l m n o p q r s')).toBe('#ABCDEFGHIJKLMNOPQRS');
    expect(generateHashtag('a b c d e f g h i j k l m n o p q r s t')).toBe('#ABCDEFGHIJKLMNOPQRST');
});
