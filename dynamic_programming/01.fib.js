//memoization
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log("memo", memo);
  return memo[n];
};

console.log(fib(50));

//tabulation
const fibTab = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 0; i <= n; i++) {
    dp[i + 1] += dp[i];
    dp[i + 2] += dp[i];
  }
  return dp[n];
};

console.log(fibTab(50));
