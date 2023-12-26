/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = new Array(n).fill(null).map(() => []);
  for (let [start, end, weight] of flights) {
    graph[start].push([end, weight]);
  }

  // Queue format: [stops, node, dist]
  const queue = [];
  queue.push([0, src, 0]);

  // Initialize distance array with Infinity
  const distance = new Array(n).fill(Infinity);
  distance[src] = 0;

  while (queue.length > 0) {
    const [stops, node, dist] = queue.shift();

    // If stops exceed k, skip this iteration
    if (stops > k) continue;

    for (let [adjNode, edW] of graph[node]) {
      // Calculate the new distance if the current node is reached
      const newDist = dist + edW;

      // Update the distance and push to the queue if distance is updated
      if (newDist < distance[adjNode] && stops <= k) {
        distance[adjNode] = newDist;
        queue.push([stops + 1, adjNode, newDist]);
      }
    }
  }

  // Check if the destination is reachable and return the distance
  return distance[dst] !== Infinity ? distance[dst] : -1;
};

const n = 4,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  src = 0,
  dst = 3,
  k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));
