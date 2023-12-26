class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(vertex, distance) {
    this.queue.push({ vertex, distance });
    this.queue.sort((a, b) => a.distance - b.distance);
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
let dest = 5;

let shortestPath = dijkstrasAlgoWithShortestPath(grid, src, dest);
console.log("Shortest Path from", src, "to", dest, ":", shortestPath);

function dijkstrasAlgoWithShortestPath(grid, src, dest) {
  let n = grid.length;
  const dist = new Array(n).fill(Infinity);
  const parent = new Array(n).fill(-1);

  const pq = new PriorityQueue();
  pq.enqueue(src, 0);
  dist[src] = 0;

  while (!pq.isEmpty()) {
    const { vertex, distance } = pq.dequeue();

    for (const [neighbour, weight] of grid[vertex]) {
      const newDist = distance + weight;
      if (newDist < dist[neighbour]) {
        dist[neighbour] = newDist;
        parent[neighbour] = vertex;
        pq.enqueue(neighbour, newDist);
      }
    }
  }

  const path = [];
  let current = dest;
  while (current != -1) {
    path.push(current);
    current = parent[current];
  }

  return path.reverse();
}
