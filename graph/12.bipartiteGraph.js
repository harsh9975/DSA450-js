const graph = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
];
const res = isBipartite(graph);
console.log("res: ", res);

function isBipartite(graph) {
  let n = graph.length;
  let colors = new Array(n).fill(0);
  for (let node = 0; node < n; node++) {
    if (colors[node] == 0 && !dfs(node, 1, graph, colors)) {
      return false;
    }
  }
  return true;
}

function dfs(node, color, graph, colors) {
  colors[node] = color;
  const oppositeColor = color === 1 ? 2 : 1;
  for (const neighbor of graph[node]) {
    if (colors[neighbor] == 0) {
      if (!dfs(neighbor, oppositeColor, graph, colors)) {
        return false;
      }
    } else if (colors[neighbor] == color) {
      return false;
    }
  }
  return true;
}
