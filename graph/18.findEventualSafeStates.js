function eventualSafeNodes(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const isSafe = new Array(n).fill(false);

  function isSafeNode(node) {
    if (visited[node]) {
      return isSafe[node];
    }
    visited[node] = true;

    for (const adjacency of graph[node]) {
      if (!isSafeNode(adjacency)) {
        return false;
      }
    }
    isSafe[node] = true;
    return true;
  }

  const safeNodes = [];
  for (let node = 0; node < n; node++) {
    if (isSafeNode(node)) {
      safeNodes.push(node);
    }
  }
  return safeNodes;
}

let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log("ans: ", eventualSafeNodes(graph));
