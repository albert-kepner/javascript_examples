console.log('substr.js');

let s = 'test';
let index = 2.5;
let foo = s.substr(index, 1);
console.log(foo); // s

let foo2 = s.substring(index, 1);
console.log(foo2); // e

s = 'test';
index = 2;
foo = s.substr(index, 1);
console.log(foo); // s

foo2 = s.substring(index, 1);
console.log(foo2); // e
