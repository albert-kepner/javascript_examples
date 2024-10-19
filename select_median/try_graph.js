const GraphCode = require('./graph_code');

let g = new GraphCode(5);  // create a new GraphCode object with 5 nodes

g.addEdge(0, 1);
g.addEdge(1, 2);

g.inferReachable();

console.log('g.reachableFrom(0)' + g.reachableFrom(0));  // [1, 2]

console.log('g.reachableFrom(1)' + g.reachableFrom(1));  // [2]

