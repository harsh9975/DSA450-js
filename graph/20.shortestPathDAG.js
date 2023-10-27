const n = 6;
const edges = [
  [0, 1, 2],
  [0, 4, 1],
  [4, 5, 4],
  [4, 2, 2],
  [1, 2, 3],
  [2, 3, 6],
  [5, 3, 1],
];

const result = shortestPathInDAG(n, edges);
console.log(result);

function shortestPathInDAG(n, edges) {
  const graph = new Array(n).fill(null).map(() => []);
  for (let [u, v, weight] of edges) {
    graph[u].push([v, weight]);
  }

  // Step 1: Topological Sort
  let topoOrder = [];
  let visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (const [adjacency, _] of graph[node]) {
      if (!visited[adjacency]) {
        dfs(adjacency);
      }
    }
    topoOrder.push(node);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  // Step 2 and 3: Relax edges in topological order
  const distance = new Array(n).fill(1e9);
  distance[0] = 0;
  while (topoOrder.length > 0) {
    const node = topoOrder.pop();
    for (const [adjacency, weight] of graph[node]) {
      if (distance[node] + weight < distance[adjacency]) {
        distance[adjacency] = distance[node] + weight;
      }
    }
  }
  return distance;
}
