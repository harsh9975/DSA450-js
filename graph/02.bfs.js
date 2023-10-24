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
  breadthFirstSearch(start) {
    const queue = [start];
    const visitedNodes = new Set();
    visitedNodes.add(start);
    while (queue.length > 0) {
      const node = queue.shift();
      console.log("Adj: ", node.edgeList);
      for (const adjacency of node.edgeList) {
        if (!visitedNodes.has(adjacency)) {
          queue.push(adjacency);
          visitedNodes.add(adjacency);
        }
      }
      console.log(node.value);
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

const graph = new Graph([node1, node2, node3, node4, node5]);

node1.connect(node2);
node1.connect(node5);
node2.connect(node5);
node2.connect(node3);
node3.connect(node5);
node3.connect(node4);
node4.connect(node5);

graph.breadthFirstSearch(node1);
