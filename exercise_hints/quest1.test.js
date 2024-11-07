// f1
f1 = function(arr) {
    let arr2 = arr.slice();
    arr2.sort();
    return arr2
}

// f2
f2 = (replacements, positions) => { 
    let values = [];
    for (position of positions) {
        values.push(position.toString());
    }
    for (replacement of replacements) {
        let position = parseInt(replacement[0]);
        values[position-1] = replacement;
    }
    return values;
}



// f1


test ('solf1', () => {
    const input = ['one','two','three','four','five'];
    const f1value = f1(input);
    console.log(`f1value = ${f1value}`);
    expect(f1value).toEqual(['five','four','one','three','two']);
    expect(input).toEqual(['one','two','three','four','five']);
});


// f2


test ('solf2', () => {
    const replacements = ['3third','5fifth','2second'];
    const positions = [1,2,3,4,5,6,7,8,9,10];
    const values = f2(replacements, positions);
    console.log(`values = ${values}`);
    expect(values).toEqual(['1','2second','3third','4','5fifth','6','7','8','9','10']);
});



// f3
f3 = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            result.push(i);
        } else {
            result.unshift(i);
        }
    }
    return result;
}

// f3


test ('solf3', () => {
    let n = 5;
    let values = f3(n);
    console.log(`values = ${values}`);
    expect(values).toEqual([4,2,1,3,5]);
    n = 10
    values = f3(n);
    console.log(`values = ${values}`);
    expect(values).toEqual([10,8,6,4,2,1,3,5,7,9]);
    n = 15
    values = f3(n);
    console.log(`values = ${values}`);
    expect(values).toEqual([14,12,10,8,6,4,2,1,3,5,7,9,11,13,15]);
});