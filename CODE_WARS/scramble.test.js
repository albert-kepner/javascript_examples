function scramble(str1, str2) {
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');
    const set1 = new Set(str1Arr);
    const set2 = new Set(str2Arr);
    for (let char of set2) {
        if (!set1.has(char)) {
            return false;
        }
        if (set1.has(char) && str1Arr.filter(c => c === char).length < str2Arr.filter(c => c === char).length) {
            return false;
        }
    }
    return true;
}

test('scramble', () => {
    expect(scramble('rkqodlw', 'world')).toBe(true);
    expect(scramble('cedewar', 'codewars')).toBe(false);
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true);
});
