class Node {
  constructor(value) {
    this.value = value;
    this.edgeList = [];
  }

  connect(node) {
    this.edgeList.push(node);
    node.edgeList.push(this);
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

  //dfs code
  isCylicDFS(start, visited, parent) {
    if (!visited) {
      visited = new Set();
    }
    if (!parent) {
      parent = null;
    }
    visited.add(start);
    for (const adjacency of start.edgeList) {
      if (!visited.has(adjacency)) {
        if (this.isCylicDFS(adjacency, visited, start)) {
          return true; // Cycle detected
        }
      } else if (adjacency !== parent) {
        return true; // Cycle detected
      }
    }
    return false;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

let graph = new Graph([node1, node2, node3, node4, node5, node6, node7]);

node1.connect(node2);
node1.connect(node3);
node3.connect(node4);
node3.connect(node6);
node6.connect(node7);
node7.connect(node5);
node5.connect(node2);

let ans = graph.isCylicDFS(node1);
console.log("ans", ans);
