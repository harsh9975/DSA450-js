console.log(
  shortestPath(4, 2, [
    [0, 1, 2],
    [0, 2, 1],
  ])
); // [0, 2, 1, -1]
console.log(
  shortestPath(6, 7, [
    [0, 1, 2],
    [0, 4, 1],
    [4, 5, 4],
    [4, 2, 2],
    [1, 2, 3],
    [2, 3, 6],
    [5, 3, 1],
  ])
); // [0, 2, 3, 6, 1, 5]

function shortestPath(n, m, edges) {
  const adjList = Array.from({ length: n }, () => []);
  const stack = [];
  const dist = new Array(n).fill(Infinity);

  for (const [u, v, w] of edges) {
    adjList[u].push({ node: v, weight: w });
  }

  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      topoSort(i, adjList, visited, stack);
    }
  }

  dist[0] = 0;

  while (stack.length) {
    const node = stack.pop();
    if (dist[node] != Infinity) {
      for (let neighbour of adjList[node]) {
        const newDist = dist[node] + neighbour.weight;
        if (newDist < dist[neighbour.node]) {
          dist[neighbour.node] = newDist;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (dist[i] == Infinity) {
      dist[i] = -1;
    }
  }
  return dist;
}

function topoSort(node, adjList, visited, stack) {
  visited[node] = true;
  for (let neighbour of adjList[node]) {
    if (!visited[neighbour.node]) {
      topoSort(neighbour.node, adjList, visited, stack);
    }
  }
  stack.push(node);
}
