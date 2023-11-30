var maxProfit = function (prices) {
  let n = prices.length;
  let memo = {};

  function getAns(ind, buy, cap) {
    if (ind === n || cap === 0) return 0;
    const key = `${ind}-${buy}-${cap}`;
    if (key in memo) {
      return memo[key];
    }
    let profit;

    if (buy) {
      profit = Math.max(
        0 + getAns(ind + 1, 1, cap),
        prices[ind] + getAns(ind + 1, 0, cap - 1)
      );
    } else {
      profit = Math.max(
        0 + getAns(ind + 1, 0, cap),
        -prices[ind] + getAns(ind + 1, 1, cap)
      );
    }
    memo[key] = profit;
    return profit;
  }

  return getAns(0, 0, 2);
};

var maxProfitTabutlation = function (prices) {
  const n = prices.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array(2)
      .fill(null)
      .map(() => Array(3).fill(0))
  );

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      for (let cap = 1; cap <= 2; cap++) {
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

  return dp[0][1][2];
};

var maxProfitSpaceOptimised = function (prices) {
  const n = prices.length;

  // Creating two sets of 2D arrays to represent the dynamic programming states for current and previous days
  const dpCurr = Array.from({ length: 3 }, () => Array(2).fill(0));
  const dpPrev = Array.from({ length: 3 }, () => Array(2).fill(0));

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let cap = 1; cap <= 2; cap++) {
      // Calculating values for buy = 1
      dpCurr[cap][1] = Math.max(
        -prices[ind] + dpPrev[cap][0],
        0 + dpPrev[cap][1]
      );

      // Calculating values for buy = 0
      dpCurr[cap][0] = Math.max(
        prices[ind] + dpPrev[cap - 1][1],
        dpPrev[cap][0]
      );
    }

    // Update the dpPrev array for the next iteration
    for (let i = 1; i <= 2; i++) {
      dpPrev[i][0] = dpCurr[i][0];
      dpPrev[i][1] = dpCurr[i][1];
    }
  }

  return dpCurr[2][1];
};
