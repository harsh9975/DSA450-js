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
  isCylicDFS(start, visited, pathVisited) {
    if (!visited) {
      visited = new Set();
    }
    if (!pathVisited) {
      pathVisited = new Set();
    }

    const dfs = (node) => {
      visited.add(node);
      pathVisited.add(node);

      for (let adjacency of node.edgeList) {
        if (!visited.has(adjacency)) {
          if (dfs(adjacency)) {
            return true;
          }
        } else if (pathVisited.has(adjacency)) {
          return true;
        }
      }
      pathVisited.delete(node);
      return false;
    };

    for (const node of this.nodes) {
      if (!visited.has(node) && dfs(node)) {
        return true;
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
let node8 = new Node(8);
let node9 = new Node(9);
let node10 = new Node(10);

let graph = new Graph([
  node1,
  node2,
  node3,
  node4,
  node5,
  node6,
  node7,
  node8,
  node9,
  node10,
]);

node1.connect(node2);
node2.connect(node3);
node3.connect(node4);
node3.connect(node7);
node4.connect(node5);
node7.connect(node5);
node5.connect(node6);
node8.connect(node2);
node8.connect(node9);
node9.connect(node10);
node10.connect(node8);

let ans = graph.isCylicDFS(node1);
console.log("ans", ans);
