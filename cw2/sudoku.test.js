var solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];

var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

function sudoku(puzzle) {
    const cols = make_cols();
    const rows = make_rows();
    const cells = make_cells();
    let found = true;
    let progress = true;
    // console.log(puzzle);
    while(found && progress) {
        found = false;
        progress = false;
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(puzzle[i][j] == 0) {
                    found = true;
                    const row = rows[i];
                    const col = cols[j];
                    const i3 = Math.floor(i/3);
                    const j3 = Math.floor(j/3);
                    cell = cells[i3][j3];
                    progress = progress || try_set(puzzle, i, j, row, col, cell);
                }
            }
        }
    }
    return puzzle;
}

function try_set(puzzle, i, j, row, col, cell) {
    // console.log(`i,j = ${i},${j}`)
    // console.log(`row = ${row}`);
    // console.log(`col = ${col}`);
    // console.log(`cell = ${cell}`);
    const takenArr = new Array(9);
    taken(puzzle, takenArr, row);
    taken(puzzle, takenArr, col);
    taken(puzzle, takenArr, cell);
    choice = tryChoice(takenArr);
    if(choice > 0) {
        // console.log(`set ${choice} at [${i},${j}]`);
        puzzle[i][j] = choice;
    }
    return (choice > 0);
}

function taken(puzzle, takenArr, locations) {
    // console.log(`locations: ${locations}`);
    for(let [i,j] of locations) {
        const num = puzzle[i][j];
        if(num > 0) {
            takenArr[num - 1] = true;
        }
    }
}

function tryChoice(takenArr) {
    let first = -1;
    let last = -1;
    let choice = 0;
    for(let i = 0; i < 9; i++) {
        if(!takenArr[i]) {
            last = i;
            if(first === -1) {
                first = i
            }
        }
    }
    if(first === last) {
        choice = first + 1;
    }
    return choice;
}


function row(i) {
    const arr = [];
    for (let j = 0; j < 9; j++) {
        arr.push(([i, j]));
    }
    return arr;
}

function col(j) {
    const arr = []
    for (let i = 0; i < 9; i++) {
        arr.push(([i,j]));
    }
    return arr;
}

function cell2(i3, j3) {
    const arr = [];
    const ibase = 3 * i3;
    const jbase = 3 * j3;
    for(let i = ibase; i < ibase + 3; i++) {
        for(let j = jbase; j < jbase + 3; j++) {
            arr.push(([i,j]));
        }
    }
    return arr;
}

function make_cells() {
    let cells = [];
    for(i3 = 0; i3 < 3; i3++) {
        let row = [];
        for(j3 = 0; j3 < 3; j3++) {
            row.push(cell2(i3,j3));
        }
        cells.push(row);
    }
    return cells;
}

function make_rows() {
    let rows = [];
    for(i = 0; i < 9; i++) {
        rows.push(row(i))
    }
    return rows;
}

function make_cols() {
    let cols = [];
    for(j = 0; j < 9; j++) {
        cols.push(col(j));
    }
    return cols;
}

console.log(sudoku(puzzle));