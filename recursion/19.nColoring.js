const N = 4;
const M = 3;
const graph = [
  [0, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [1, 0, 1, 0],
];
console.log(graphColoring(graph, M, N));

function graphColoring(graph, M, N) {
  const color = new Array(N).fill(-1);

  function isSafe(vertex, c) {
    for (let i = 0; i < N; i++) {
      if (graph[vertex][i] == 1 && color[i] == c) {
        return false;
      }
    }
    return true;
  }

  function graphColorUtil(vertex) {
    if (vertex == N) {
      return true;
    }

    for (let c = 1; c <= M; c++) {
      if (isSafe(vertex, c)) {
        color[vertex] = c;
        if (graphColorUtil(vertex + 1)) {
          return true;
        }
        color[vertex] = -1;
      }
    }
    return false;
  }

  return graphColorUtil(0);
}
