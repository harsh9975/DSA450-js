/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class _PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(distance, node) {
    this.queue.push([distance, node]);
    this.queue.sort((a, b) => a[0] - b[0]);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

var networkDelayTime = function (times, n, k) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v, w] of times) {
    graph[u - 1].push({ to: v - 1, weight: w }); // Adjusted indices to 0-based
  }

  const dist = new Array(n).fill(Infinity);
  dist[k - 1] = 0; // Adjusted index to 0-based

  const pq = new _PriorityQueue();
  pq.enqueue(0, k - 1); // Adjusted index to 0-based

  while (!pq.isEmpty()) {
    const [d, node] = pq.dequeue();
    if (d > dist[node]) continue;
    for (const { to, weight } of graph[node]) {
      if (dist[node] + weight < dist[to]) {
        dist[to] = dist[node] + weight;
        pq.enqueue(dist[to], to);
      }
    }
  }

  let maxTime = -Infinity;
  for (let i = 0; i < n; i++) {
    // Loop from 0 to n-1
    if (dist[i] === Infinity) return -1; // If any node is not reachable
    maxTime = Math.max(maxTime, dist[i]);
  }

  return maxTime;
};

const times1 = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  n1 = 4,
  k1 = 2;
console.log(networkDelayTime(times1, n1, k1)); // Output: 2

const times2 = [[1, 2, 1]],
  n2 = 2,
  k2 = 1;
console.log(networkDelayTime(times2, n2, k2)); // Output: 1

const times3 = [[1, 2, 1]],
  n3 = 2,
  k3 = 2;
console.log(networkDelayTime(times3, n3, k3)); // Output: -1
