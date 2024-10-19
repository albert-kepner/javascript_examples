class GraphCode {
    constructor(maxNodes) {
        this.maxNodes = maxNodes;
        this.nodes = Array.from({ length: maxNodes }, () => []);
    }

    addEdge(u, v) {
        if (u < this.maxNodes && v < this.maxNodes) {
            if (!this.nodes[u].includes(v)) { // Use includes instead of contains
                this.nodes[u].push(v);
            }
        }
    }

    reachableFrom(u) {  // returns a list of nodes reachable from u
        return this.nodes[u];
    }

    inferReachable() {
        for (let i = 0; i < this.maxNodes; i++) {
            for (let j = 0; j < this.nodes[i].length; j++) {
                let v = this.nodes[i][j];
                for (let k = 0; k < this.nodes[v].length; k++) {
                    let w = this.nodes[v][k];
                    if (!this.nodes[i].includes(w)) {
                        this.nodes[i].push(w);
                    }
                }
            }
        }
    }
}

module.exports = GraphCode;
