var maxProfitMemo = function (prices, fee) {
  let memo = {};
  return calMaxProfit(0, false, prices, memo, fee);
};

function calMaxProfit(index, bought, prices, memo, fee) {
  if (index >= prices.length) {
    return 0;
  }
  let maxProfit = 0;

  let key = `${index}-${bought}`;
  if (key in memo) {
    return memo[key];
  }

  if (bought) {
    maxProfit = Math.max(
      calMaxProfit(index + 1, false, prices, memo, fee) + prices[index] - fee,
      calMaxProfit(index + 1, true, prices, memo, fee)
    );
  } else {
    maxProfit = Math.max(
      calMaxProfit(index + 1, true, prices, memo, fee) - prices[index],
      calMaxProfit(index + 1, false, prices, memo, fee)
    );
  }

  memo[key] = maxProfit;
  return maxProfit;
}

var maxProfitTab = function (prices, fee) {
  let n = prices.length;
  const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));
  dp[n][0] = dp[n][1] = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let buy = 0; buy <= 1; buy++) {
      let profit = 0;
      if (buy) {
        // When buying, subtract the current price from the profit
        profit = Math.max(dp[i + 1][0] - prices[i], dp[i + 1][1] + 0);
      } else {
        // When selling, add the current price to the profit
        profit = Math.max(dp[i + 1][0] + 0, dp[i + 1][1] + prices[i] - fee);
      }
      dp[i][buy] = profit;
    }
  }

  return dp[0][1];
};

var maxProfitSpaceOptimized = function (prices, fee) {
  const n = prices.length;

  let prevSell = 0;
  let currSell = 0;
  let prevBuy = -prices[0]; // Initialize with the first buy

  for (let ind = 1; ind < n; ind++) {
    const temp = currSell; // Store the current sell value for later use
    // Calculate the maximum profit for selling on the current day
    currSell = Math.max(prevBuy + prices[ind] - fee, currSell);
    // Calculate the maximum profit for buying on the current day
    prevBuy = Math.max(prevBuy, temp - prices[ind]);
  }

  return currSell;
};
