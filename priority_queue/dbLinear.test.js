const PriorityQueue = require('js-priority-queue');

function dblLinear(n) {
    // Create a new priority queue
    const queue = new PriorityQueue({ comparator: function(a, b) { return a - b; }});
    const set = new Set();
    set.add(1);
    queue.queue(1);
    if(n === 0) return 1;
    let counter = 0;
    let lastX = 1;

    while (counter <= n) {
        const x = queue.dequeue();
        lastX = x;
        counter += 1;
        const q2 = 2 * x + 1;
        const q3 = 3 * x + 1;
        if(!set.has(q2)) {
            queue.queue(q2);
            set.add(q2);
        }
        if(!set.has(q3)) {
            queue.queue(q3);
            set.add(q3);
        }
    }
    return lastX;
}

test('dbLinear', () => {
    expect(dblLinear(10)).toBe(22);
});