class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

class Solution {
  spanningTree(arr, v, e) {
    const adjacencyList = new Array(v).fill().map(() => []);
    for (const [u, v, weight] of arr) {
      adjacencyList[parseInt(u)].push([parseInt(v), parseInt(weight)]);
      adjacencyList[parseInt(v)].push([parseInt(u), parseInt(weight)]);
    }

    const visited = new Array(v).fill(false);
    const pq = new PriorityQueue();
    let mstWeight = 0;

    pq.enqueue(0, 0);

    while (!pq.isEmpty()) {
      const { value: u, priority: weight } = pq.dequeue();

      if (visited[u]) continue;

      visited[u] = true;
      mstWeight += weight;

      for (const [v, edgeWeight] of adjacencyList[u]) {
        if (!visited[v]) {
          pq.enqueue(v, edgeWeight);
        }
      }
    }

    return mstWeight;
  }
}

const solution = new Solution();
const arr = [
  ["0", "1", "6"],
  ["0", "2", "3"],
  ["1", "3", "9"],
  ["0", "3", "1"],
  ["2", "3", "6"],
];
const v = 4;
const e = 5;
console.log(solution.spanningTree(arr, v, e));
