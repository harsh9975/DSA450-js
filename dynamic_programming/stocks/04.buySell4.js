var maxProfit = function (k, prices) {
  const n = prices.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(2)
      .fill(null)
      .map(() => Array(k + 1).fill(0))
  );

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      for (let cap = 1; cap <= k; cap++) {
        if (buy === 1) {
          dp[ind][buy][cap] = Math.max(
            -prices[ind] + dp[ind + 1][0][cap],
            0 + dp[ind + 1][1][cap]
          );
        } else {
          dp[ind][buy][cap] = Math.max(
            prices[ind] + dp[ind + 1][1][cap - 1],
            dp[ind + 1][0][cap]
          );
        }
      }
    }
  }

  return dp[0][1][k];
};
