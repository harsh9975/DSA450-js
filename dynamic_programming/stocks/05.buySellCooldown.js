var maxProfitMemo = function (prices) {
  const n = prices.length;
  const memo = Array.from({ length: n }, () =>
    Array(2)
      .fill(null)
      .map(() => -1)
  );

  function maxProfitUtil(index, isHolding) {
    if (index >= n) {
      return 0;
    }

    if (memo[index][isHolding] !== -1) {
      return memo[index][isHolding];
    }

    // Option 1: Skip the current day (cooldown)
    const option1 = maxProfitUtil(index + 1, isHolding);

    // Option 2: Buy or sell on the current day
    const option2 = isHolding
      ? prices[index] + maxProfitUtil(index + 2, 0)
      : -prices[index] + maxProfitUtil(index + 1, 1);

    memo[index][isHolding] = Math.max(option1, option2);
    return memo[index][isHolding];
  }

  return maxProfitUtil(0, 0);
};

var maxProfitTabulation = function (prices) {
  const n = prices.length;
  const dp = Array.from({ length: n + 2 }, () => Array(2).fill(0));

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      if (buy) {
        dp[ind][buy] = Math.max(
          -prices[ind] + dp[ind + 1][0],
          0 + dp[ind + 1][1]
        );
      } else {
        dp[ind][buy] = Math.max(
          prices[ind] + dp[ind + 2][1],
          0 + dp[ind + 1][0]
        );
      }
    }
  }
  return dp[0][1];
};

var maxProfitSpaceOptimised = function (prices) {
  const n = prices.length;
  // Create arrays to represent the current and two front state arrays, each initialized to [0, 0]
  let cur = [0, 0];
  let front1 = [0, 0];
  let front2 = [0, 0];

  // Loop through the prices in reverse order
  for (let ind = n - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit;

      if (buy === 0) {
        // We can buy the stock
        profit = Math.max(0 + front1[0], -prices[ind] + front1[1]);
      }

      if (buy === 1) {
        // We can sell the stock
        profit = Math.max(0 + front1[1], prices[ind] + front2[0]);
      }

      cur[buy] = profit;
    }

    // Update front2 and front1 arrays for the next iteration
    front2 = [...front1];
    front1 = [...cur];
  }

  // Return the maximum profit that can be generated
  return cur[0];
};
