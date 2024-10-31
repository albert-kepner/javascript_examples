snail = function(array) {
    let result = [];
    while (array.length > 0) {
      // Steal the first row
      result = result.concat(array.shift());
      // Steal the right items of the remaining rows
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }
        // Steal the bottom row
        let bottom = array.pop();
        if (bottom) {
            result = result.concat(bottom.reverse());
        }
        // Steal the left items of the remaining rows
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    } 
    return result;
  }


  test('snail', function() {
    let have =  [[1,2,3],
    [4,5,6],
    [7,8,9]];
    let want = [1,2,3,6,9,8,7,4,5];
    expect(snail(have)).toEqual(want);
  });
