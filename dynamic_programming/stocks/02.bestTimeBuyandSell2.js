var maxProfitMemo = function (prices) {
  let memo = {};
  return calMaxProfit(0, false, prices, memo);
};

function calMaxProfit(index, bought, prices, memo) {
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
      calMaxProfit(index + 1, false, prices, memo) + prices[index],
      calMaxProfit(index + 1, true, prices, memo)
    );
  } else {
    maxProfit = Math.max(
      calMaxProfit(index + 1, true, prices, memo) - prices[index],
      calMaxProfit(index + 1, false, prices, memo)
    );
  }

  memo[key] = maxProfit;
  return maxProfit;
}

var maxProfitTabulation = function (prices) {
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
        profit = Math.max(dp[i + 1][0] + 0, dp[i + 1][1] + prices[i]);
      }
      dp[i][buy] = profit;
    }
  }

  return dp[0][1];
};

var maxProfitSpaceOptimized = function (prices) {
  let n = prices.length;
  let dp_i_0 = 0; // profit when not holding a stock
  let dp_i_1 = 0; // profit when holding a stock

  for (let i = n - 1; i >= 0; i--) {
    // Store the previous values before updating
    const prev_dp_i_0 = dp_i_0;
    const prev_dp_i_1 = dp_i_1;

    // When selling, add the current price to the profit
    dp_i_0 = Math.max(prev_dp_i_0, prev_dp_i_1 + prices[i]);
    // When buying, subtract the current price from the profit
    dp_i_1 = Math.max(prev_dp_i_0 - prices[i], prev_dp_i_1);
  }

  return dp_i_1; // Return the profit when holding a stock on the first day
};
