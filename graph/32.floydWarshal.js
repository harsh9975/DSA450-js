class Solution {
  static floydWarshall(n, graph) {
    let dist = [];

    // Initialize distance matrix
    for (let i = 0; i < n; i++) {
      dist[i] = [];
      for (let j = 0; j < n; j++) {
        if (i === j) {
          dist[i][j] = 0;
        } else if (graph[i][j] !== undefined) {
          dist[i][j] = graph[i][j];
        } else {
          dist[i][j] = Infinity;
        }
      }
    }

    // Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (
            dist[i][k] !== Infinity &&
            dist[k][j] !== Infinity &&
            dist[i][k] + dist[k][j] < dist[i][j]
          ) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }

    return dist;
  }
}

// Example usage:
const n = 4;
const graph = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 4],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0],
];

const result = Solution.floydWarshall(n, graph);
console.log(result);
