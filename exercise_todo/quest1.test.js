// f1
f1 = function(arr) {
    
}


test ('f1', () => {
    const input = ['one','two','three','four','five'];
    const f1value = f1(input);
    console.log(`f1value = ${f1value}`);
    expect(f1value).toEqual(['five','four','one','three','two']);
    expect(input).toEqual(['one','two','three','four','five']);
});


// f2
function f2(replacements, positions) {
    
}


test ('f2', () => {
    const replacements = ['3third','5fifth','2second'];
    const positions = [1,2,3,4,5,6,7,8,9,10];
    const values = f2(replacements, positions);
    console.log(`values = ${values}`);
    expect(values).toEqual(['1','2second','3third','4','5fifth','6','7','8','9','10']);
});

// f3
function f3(n) {
    
}   

test ('f3', () => {
    let n = 5;
    let values = f3(n);
    console.log(`values = ${values}`);
    expect(values).toEqual([4,2,1,3,5]);
    n = 10
    values = f3(n);
    console.log(`values = ${values}`);
    expect(values).toEqual([10,8,6,4,2,1,3,5,7,9]);
});
