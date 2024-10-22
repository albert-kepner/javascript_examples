function loop_size(node) {
    let visitedNodes = new Set();
    while (!visitedNodes.has(node)) {
        visitedNodes.add(node);
        node = node.next;
    }
    let loopNode = node;
    let loopSize = 0;
    do {
        loopSize++;
        node = node.next;
    } while (node !== loopNode);
    return loopSize;
}