class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

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
  const distance = new Array(n).fill(Infinity);
  distance[src] = 0;
  const pq = new PriorityQueue();
  pq.enqueue(src, 0);
  while (!pq.isEmpty()) {
    const { element: node, priority: currentDistance } = pq.dequeue();
    if (currentDistance > distance[node]) {
      continue;
    }
    for (const [adjacency, weight] of grid[node]) {
      const distToNeighbor = currentDistance + weight;
      if (distToNeighbor < distance[adjacency]) {
        distance[adjacency] = distToNeighbor;
        pq.enqueue(adjacency, distToNeighbor);
      }
    }
  }
  return distance;
}
