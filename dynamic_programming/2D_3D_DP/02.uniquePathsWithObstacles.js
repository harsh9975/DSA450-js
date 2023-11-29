let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log("memo: ", uniquePathsWithObstacles(grid));
console.log("tabular: ", uniquePathsWithObstaclesTab(grid));

function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let memo = {};
  return gridTraveller(m - 1, n - 1, obstacleGrid, memo);
}

function gridTraveller(m, n, grid, memo) {
  if (m < 0 || n < 0 || grid[m][n] === 1) return 0;
  if (m === 0 && n === 0) return 1;

  const key = m + ", " + n;
  if (key in memo) {
    return memo[key];
  }

  memo[key] =
    gridTraveller(m - 1, n, grid, memo) + gridTraveller(m, n - 1, grid, memo);

  return memo[key];
}

function uniquePathsWithObstaclesTab(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  return gridTravellerTab(m - 1, n - 1, obstacleGrid, dp);
}

function gridTravellerTab(m, n, grid, dp) {
  dp[0][0] = grid[0][0] === 1 ? 0 : 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = dp[i][j];
      if (grid[i][j] == 1) {
        dp[i][j] = 0;
        continue;
      } else {
        if (i + 1 <= m) dp[i + 1][j] += curr;
        if (j + 1 <= n) dp[i][j + 1] += curr;
      }
    }
  }
  return dp[m][n];
}
