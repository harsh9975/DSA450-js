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

  depthFirstSearch(start, visited) {
    if (!visited) {
      visited = new Set();
    }
    // if (start.value == end.value) {
    //   console.log("found it", start.value);
    //   return;
    // }
    console.log("visted", start.value);
    visited.add(start);
    for (const adjacency of start.edgeList) {
      if (!visited.has(adjacency)) {
        this.depthFirstSearch(adjacency, visited);
      }
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);

const graph = new Graph([
  node1,
  node2,
  node3,
  node4,
  node5,
  node6,
  node7,
  node8,
]);

node1.connect(node2);
node1.connect(node3);
node2.connect(node5);
node2.connect(node6);
node3.connect(node4);
node3.connect(node7);
node8.connect(node4);
node8.connect(node7);

graph.depthFirstSearch(node1);

class Solution {
  // Function to detect cycle in an undirected graph.
  isCycle(V, adj) {
    // code here
    let vis = new Array(V).fill(false);
    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        if (this.dfs(adj, i, -1, vis)) {
          return true;
        }
      }
    }
    return false;
  }

  dfs(adj, node, parent, vis) {
    vis[node] = true;
    for (let adjacency of adj[node]) {
      if (adjacency == parent) continue;
      if (vis[adjacency]) return true;
      if (this.dfs(adj, adjacency, node, vis)) {
        return true;
      }
    }
    return false;
  }
}
