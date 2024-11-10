function knight(start, finish) {
    if(start == finish) return 0;
    const startPos = toPosition(start);
    const found = new Set();
    found.add(finish);
    const letters = 'abcdefgh';
    const jumps = get_jumps();

    function get_jumps() {
        const moves = []
        for(x = -2; x <= 2; x+=4) {
            for(y = -1; y <= 1; y+=2) {
                moves.push([x,y]);
                moves.push([y,x]);
            }
        }
        return moves;
    }

    function toPosition(letterNumber) {
        const letters = 'abcdefgh';
        const x = letters.indexOf(letterNumber[0]) + 1;
        const y = Number(letterNumber[1]);
        return [x,y];
    }

    function toPosName(place) {
        const [x,y] = [...place];
        return `${letters[x-1]}${y}`;
    }

    function get_moves(position) {
        const [x,y] = [...position];
        moves = [];
        for (jump of jumps) {
            const [x1, y1] = [...jump];
            moves.push([x + x1, y + y1]);
        }
        const goodMoves = moves.filter(m => {
            const [x,y] = [...m];
            let ok = true;
            if(x < 1 || x > 8) ok = false;
            if(y < 1 || y > 8) ok = false;
            return ok;
        });
        return goodMoves;
    }

    let count = 0;
    let stack = [];
    stack.push(startPos);
    let newStack = [];
    while(true) {
        count++;
        for (pos of stack) {
            const moves = get_moves(pos);
            for (move of moves) {
                const place = toPosName(move);
                if(place == finish) return count;
                if(!found[place]) {
                    found.add(place);
                    newStack.push(move);
                }
            }
        }
        stack = newStack;
        newStack = [];
    }
}

test('knight',() => {
    console.log(`knight moves = ${knight('a1','a3')}`);
});

test('knight',() => {
    console.log(`knight moves = ${knight('a1','c8')}`);
});
