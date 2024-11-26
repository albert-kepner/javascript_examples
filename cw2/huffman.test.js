// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
    const dict = {};
    for (c of s.split('')) {
        if (dict[c]) {
            dict[c]++;
        } else {
            dict[c] = 1;
        }
    }
    const result = [];
    for (const [key, value] of Object.entries(dict)) {
        result.push([key, value]);
    }
    return result;
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {
    const tree = makeTree(freqs);
    return s.split('').map(c => encodeChar(tree, c, '')).join('');
}

function encodeChar(tree, c, accum) {
    // console.log(`tree: ${tree}, c: ${c}, accum: ${accum}`);
    if (tree.char) {
        return '';
    }
    if (tree.left.char === c) {
        return accum+'0';
    }
    if (tree.right.char === c) {
        return accum+'1';
    }
    return encodeChar(tree.left, c, accum+'0') + encodeChar(tree.right, c, accum+'1');
}

// takes [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {
    const tree = makeTree(freqs);
    let result = '';
    let node = tree;
    for (const bit of bits) {
        if (bit === '0') {
            node = node.left;
        } else {
            node = node.right;
        }
        if (node.char) {
            result += node.char;
            node = tree;
        }
    }
    return result;
}   

function makeTree(freqs) {
    let trees = freqs.map(([char, freq]) => makeLeaf(char, freq));
    trees.sort((a, b) => a.freq - b.freq);
    // console.log(trees);
    while (trees.length > 1) {
        const [a, b, ...rest] = trees;
        const node = makeNode(a, b);
        // console.log(node);
        if(rest.length === 0) { 
            return node; 
        }
        trees = insertByFreq(rest, node);
    }
    return null;
}

const makeLeaf = (c, n) => ({ char: c, freq: n });

const makeNode = (l, r) => ({ left: l, right: r, freq: l.freq + r.freq });

const insertByFreq = (trees, node) => {
    const index = findIndexForNode(trees, t => t.freq > node.freq);
    if(index === -1) { 
        return [...trees, node]; 
    }
    return [...trees.slice(0, index), node, ...trees.slice(index)]; 
}

const findIndexForNode = (trees, predicate) => {
    for(let i = 0; i < trees.length; i++) {
        if(predicate(trees[i])) {
            return i;
        }
    }
    return -1;
};


var str1 = `Usually we choose 0 for the left branch and 1 for the right branch (but it might also be swapped). By traversing from the root to the symbol leaf, we want to encode, we get the matching representation. To decode a sequence of binary digits into a symbol, we start from the root and just follow the path in the same way, until we reach a symbol.`;

console.log(`str1: ${str1}`);
var freqs1 = frequencies(str1);
console.log(freqs1);


var code1 = encode(freqs1, str1);
console.log(`code1: ${code1}`);

decode1 = decode(freqs1, code1);
console.log(`decode1: ${decode1}`);
