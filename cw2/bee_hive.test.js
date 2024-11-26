howManyBees = function (hive) {
    let beeCount = 0;
    if(!hive) return 0;
    if(hive.length === 0) return 0;
    const counter = (line) => {
        while(true) {
            const beeIndex = line.indexOf('bee');
            if(beeIndex === -1) {
                break;
            }
            line = line.slice(beeIndex + 3);
            beeCount++;
        }
    };
    const rev = (line) => {
        return line.split('').reverse().join('');
    };
    function matrix_transpose(matrix) {
        return matrix[0].map((_, i) => matrix.map(row => row[i]));
    }
    for(let linearr of hive) {
        const line = linearr.join('');
        counter(line);
        counter(rev(line));
    }
    for(let linearr of matrix_transpose(hive)) {
        const line = linearr.join('');
        counter(line);
        counter(rev(line));
    }
    return beeCount;
}

var hive = [
    "bee.bee".split(''),
    ".e..e..".split(''),
    ".b..eeb".split('')
  ];

console.log(howManyBees(hive)); // 4




// console.log(matrix_transpose(hive)); // [ [ 'b', 'e', 'b' ], [ 'e', '.', 'e' ], [ 'e', '.', 'e' ] ]