function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s.substr(s.length / 2 - 1, 2);
    } else {
        return s.substr(s.length / 2, 1);
    }
  }


test('666even', () => {
    expect(getMiddle('test')).toBe('es');
});

test('666odd', () => {
    expect(getMiddle('testing')).toBe('t');
});
