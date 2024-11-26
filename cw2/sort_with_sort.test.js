function sort(initialArray, sortingArray) {
  const result = Array(initialArray.length);
    for (let i = 0; i < initialArray.length; i++) {
        const element = initialArray[i];
        const destinationIndex = sortingArray[i];
        result[destinationIndex] = element;
    }
  return result
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0])); // => ['z', 'x', 'y']
