// Array of objects
let people = [
    { name: 'Zeb', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 },
    { name: 'Sara', age: 20 }
  ];
  
  // Sort the array by age
  // people.sort((a, b) => a.age - b.age);


  function makeCompareFunction(field) {
    return function(a,b) {
        if(a[field] < b[field]) return -1;
        if(a[field] > b[field]) return +1;
        return 0;
    }
  }
  
  var fn1 = makeCompareFunction('name');
  var fn2 = makeCompareFunction('age');

  console.log(people.sort(fn1));
  console.log(people.sort(fn2));