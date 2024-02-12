/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

const MOD = 1e9 + 7;

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

var countPaths = function (n, roads) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v, w] of roads) {
    graph[u].push({ to: v, weight: w });
    graph[v].push({ to: u, weight: w });
  }

  const dist = new Array(n).fill(Infinity);
  const count = new Array(n).fill(0);

  dist[0] = 0;
  count[0] = 1;
  const pq = new _PriorityQueue();
  pq.enqueue(0, 0);

  while (!pq.isEmpty()) {
    const [d, node] = pq.dequeue();
    if (d > dist[node]) continue;

    for (const { to, weight } of graph[node]) {
      if (dist[node] + weight < dist[to]) {
        dist[to] = dist[node] + weight;
        count[to] = count[node];
        pq.enqueue(dist[to], to);
      } else if (dist[node] + weight === dist[to]) {
        count[to] = (count[to] + count[node]) % MOD;
      }
    }
  }
  return count[n - 1];
};
