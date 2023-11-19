const gridTraveller = (m, n, memo = {}) => {
  const key = m + ", " + n;
  if (key in memo) {
    return memo[key];
  }
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));

//tabulation stratergy

const gridTravellerTab = (m, n) => {
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  dp[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const curr = dp[i][j];
      if (j + 1 <= n) dp[i][j + 1] += curr;
      if (i + 1 <= m) dp[i + 1][j] += curr;
    }
  }
  return dp[m][n];
};

console.log(gridTravellerTab(1, 1));
console.log(gridTravellerTab(3, 3));
console.log(gridTravellerTab(18, 18));
