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

  //bfs code
  isCylicBFS(start) {
    let queue = [{ node: start, parent: null }];
    let visited = new Set();

    while (queue.length) {
      console.log("queue", queue);
      const { node, parent } = queue.shift();
      visited.add(node);
      for (const adjacency of node.edgeList) {
        if (!visited.has(adjacency)) {
          queue.push({ node: adjacency, parent: node });
          visited.add(adjacency);
        } else if (adjacency != parent) {
          console.log("cycle found at", adjacency.value);
          return true;
        }
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

let ans = graph.isCylicBFS(node1);
console.log("ans", ans);
