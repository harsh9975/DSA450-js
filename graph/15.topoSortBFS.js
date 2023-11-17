class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }

  connect(node) {
    this.edgeList.push(node);
  }

  getAdjacentList() {
    return this.edgeList.map((edge) => edge.value);
  }

  isConnected(node) {
    return !!this.edgeList.find((edge) => edge.value == node.value);
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }

  addToGraph(node) {
    this.nodes.push(node);
  }

  topologicalSort() {
    const inDegrees = [];
    const sortedNodes = [];

    this.nodes.forEach((node) => {
      inDegrees[node.value] = 0;
    });

    this.nodes.forEach((node) => {
      node.edgeList.forEach((neighbor) => {
        inDegrees[neighbor.value]++;
      });
    });

    const queue = this.nodes.filter((node) => inDegrees[node.value] === 0);

    while (queue.length > 0) {
      const currNode = queue.shift();
      sortedNodes.push(currNode.value);

      for (const adjacency of currNode.edgeList) {
        inDegrees[adjacency.value]--;
        if (inDegrees[adjacency.value] === 0) {
          queue.push(adjacency);
        }
      }
    }

    return sortedNodes;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

const graph = new Graph([a, b, c, d, e, f]);

a.connect(b);
a.connect(c);
b.connect(d);
d.connect(f);
e.connect(c);
e.connect(f);
const res = graph.topologicalSort();
console.log("res: ", res);

//gfg toposort bfs
class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    // code here
    let indegree = new Array(V).fill(0);
    for (let i = 0; i < V; i++) {
      for (let _adj of adj[i]) {
        indegree[_adj]++;
      }
    }
    let queue = [];

    for (let i = 0; i < V; i++) {
      if (indegree[i] == 0) {
        queue.push(i);
      }
    }
    let topo = [];
    while (queue.length > 0) {
      let node = queue.shift();
      topo.push(node);
      for (let _adj of adj[node]) {
        indegree[_adj]--;
        if (indegree[_adj] == 0) {
          queue.push(_adj);
        }
      }
    }
    return topo;
  }
}
