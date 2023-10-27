let grid = [
  [],
  [
    [2, 2],
    [4, 1],
  ],
  [
    [1, 2],
    [5, 5],
    [3, 4],
  ],
  [
    [2, 4],
    [4, 3],
    [5, 1],
  ],
  [
    [1, 1],
    [3, 3],
  ],
  [
    [2, 5],
    [3, 1],
  ],
];
let src = 1;

let ans = shortestPath(grid, src);
console.log("ans", ans);

function shortestPath(grid, src) {
  let n = grid.length;
  let distance = new Array(n).fill(Infinity);
  distance[src] = 0;
  let parent = new Array(n).fill(-1);
  const visited = new Set();

  for (let i = 0; i < n - 1; i++) {
    const currentVertex = getClosestVertex(distance, visited);
    visited.add(currentVertex);
    for (const [adjacency, weight] of grid[currentVertex]) {
      const distToNeighbor = distance[currentVertex] + weight;
      if (distToNeighbor < distance[adjacency]) {
        distance[adjacency] = distToNeighbor;
        parent[adjacency] = currentVertex;
      }
    }
  }

  const shortestPaths = [];
  for (let i = 0; i < n; i++) {
    let path = [];
    let currentVertex = i;
    while (currentVertex !== -1) {
      path.unshift(currentVertex);
      currentVertex = parent[currentVertex];
    }
    shortestPaths.push(path);
  }
  return shortestPaths[shortestPaths.length - 1];
}

function getClosestVertex(distance, visited) {
  let minDistance = Infinity;
  let closestVertex = null;

  for (let vertex = 0; vertex < distance.length; vertex++) {
    if (!visited.has(vertex) && distance[vertex] < minDistance) {
      minDistance = distance[vertex];
      closestVertex = vertex;
    }
  }

  return closestVertex;
}
