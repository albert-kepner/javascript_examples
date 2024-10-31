function addOffsets(offsetsP, LP) {
    if (LP.length === 0) {
        return [];
    }
    let offsets = offsetsP.slice(); 
    let L = LP.slice();
    let first = L.shift();
    let offset = offsets.shift();
    offsets.push(offset);
    let item = first + offset;
    
    let rest = addOffsets(offsets, L);
    let msg = `L = ${L}, item = ${item}, rest = ${rest}`;
    // console.log(msg);
    return [item].concat(rest);
}


test('xxx', () => {
    const arr = [1, 2, 3, 4, 5];
    const offsets = [1, 2];
    const result = addOffsets(offsets, arr);
    // console.log(`in test result: ${result}`);
    expect(result).toEqual([2, 4, 4, 6, 6]);
});

//

