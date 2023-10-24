const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const ans = findCircleNum(isConnected);
console.log("ans: ", ans);

//TC:O(N)
function findCircleNum(isConnected) {
  let n = isConnected.length;
  let count = 0;
  let visited = Array(n);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      console.log("check: ", i);
      count++;
      dfs(i, isConnected, visited);
    }
  }
  return count;
}

//TC:  O(V+2E)
function dfs(node, isConnected, visited) {
  visited[node] = true;
  for (let i = 0; i < isConnected.length; i++) {
    if (isConnected[node][i] == 1 && !visited[i]) {
      dfs(i, isConnected, visited);
    }
  }
}
