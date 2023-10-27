const n = 9;
const edges = [
  [0, 1],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [1, 2],
  [2, 6],
  [6, 7],
  [7, 8],
  [6, 8],
];
const src = 0;
const result = shortestPaths(n, edges, src);
console.log(result);

function shortestPaths(n, edges, src) {
  const graph = new Array(n).fill(null).map(() => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const distance = new Array(n).fill(-1);
  distance[src] = 0;

  const queue = [src];
  while (queue.length) {
    const node = queue.shift();

    for (const adjacency of graph[node]) {
      if (distance[adjacency] == -1) {
        distance[adjacency] = distance[node] + 1;
        queue.push(adjacency);
      }
    }
  }
  return distance;
}
