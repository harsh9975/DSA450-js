let grid = [
  [
    [1, 4],
    [2, 4],
  ],
  [
    [0, 4],
    [2, 2],
  ],
  [
    [0, 4],
    [1, 2],
    [3, 3],
    [4, 1],
    [5, 6],
  ],
  [
    [2, 3],
    [5, 2],
  ],
  [
    [2, 1],
    [5, 3],
  ],
  [
    [2, 6],
    [3, 2],
    [4, 3],
  ],
];
let src = 0;

let ans = disktrasAlgo(grid, src);
console.log("ans", ans);

function disktrasAlgo(grid, src) {
  let n = grid.length;
  let distance = new Array(n).fill(Infinity);
  distance[src] = 0;

  const visited = new Set();

  while (visited.size < n) {
    const currentVertex = getVertex(distance, visited);
    visited.add(currentVertex);
    for (const [adjacency, weight] of grid[currentVertex]) {
      const distToNeighbor = distance[currentVertex] + weight;
      if (distToNeighbor < distance[adjacency]) {
        distance[adjacency] = distToNeighbor;
      }
    }
  }
  return distance;
}

function getVertex(distance, visited) {
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
