function unboundedKnapsackMemo(n, w, profit, weight) {
  const memo = {};

  function knapSackUtil(remainingWeight) {
    if (remainingWeight === 0) {
      return 0;
    }

    if (remainingWeight in memo) {
      return memo[remainingWeight];
    }

    let maxProfit = 0;

    for (let i = 0; i < n; i++) {
      if (weight[i] <= remainingWeight) {
        maxProfit = Math.max(
          maxProfit,
          profit[i] + knapSackUtil(remainingWeight - weight[i])
        );
      }
    }

    memo[remainingWeight] = maxProfit;
    return maxProfit;
  }

  return knapSackUtil(w);
}

function unboundedKnapsack(n, w, profit, weight) {
  const dp = Array(w + 1).fill(0);

  for (let i = 0; i <= w; i++) {
    for (let j = 0; j < n; j++) {
      if (weight[j] <= i) {
        dp[i] = Math.max(dp[i], dp[i - weight[j]] + profit[j]);
      }
    }
  }

  return dp[w];
}

// Example usage:
const n = 3;
const w = 15;
const profit = [7, 3, 4];
const weight = [5, 10, 20];
console.log("memo: ", unboundedKnapsackMemo(n, w, profit, weight));
console.log("Tab: ", unboundedKnapsack(n, w, profit, weight));
