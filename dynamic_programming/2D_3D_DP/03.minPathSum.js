let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log("memo: ", minPathSum(grid));
console.log("tabular: ", minPathSumTab(grid));
function minPathSum(grid) {
  let memo = {};
  let m = grid.length;
  let n = grid[0].length;
  return gridTraveller(m - 1, n - 1, grid, memo);
}

function gridTraveller(m, n, grid, memo) {
  if (m == 0 && n == 0) return grid[0][0];
  if (m < 0 || n < 0) return Number.MAX_VALUE;
  const key = m + ", " + n;
  if (key in memo) {
    return memo[key];
  }

  let left = grid[m][n] + gridTraveller(m - 1, n, grid, memo);
  let up = grid[m][n] + gridTraveller(m, n - 1, grid, memo);

  memo[key] = Math.min(left, up);
  return memo[key];
}

function minPathSumTab(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  return gridTravellerTab(m - 1, n - 1, grid, dp);
}

function gridTravellerTab(m, n, grid, dp) {
  for (let i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = grid[i][j];
      } else {
        let curr = grid[i][j];
        let left = i > 0 ? dp[i - 1][j] + curr : Infinity;
        let right = j > 0 ? dp[i][j - 1] + curr : Infinity;
        dp[i][j] = Math.min(left, right);
      }
    }
  }
  return dp[m][n];
}
