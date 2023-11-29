var coinChangeMemo = function (coins, amount) {
  let memo = {};
  return coinChangeHelper(coins, amount, memo);
};

function coinChangeHelper(coins, target, memo) {
  if (target == 0) return 0;
  if (target < 0) return -1;
  if (target in memo) {
    return memo[target];
  }

  let minCoins = Infinity;
  for (const coin of coins) {
    const result = coinChangeHelper(coins, target - coin, memo);
    if (result >= 0 && result < minCoins) {
      minCoins = result + 1;
    }
  }

  memo[target] = minCoins == Infinity ? -1 : minCoins;
  return memo[target];
}

var coinChangeTab = function (coins, amount) {
  const n = coins.length;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < n; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1, 2, 5],
  amount = 11;
console.log("memo: ", coinChangeMemo(coins, amount));
console.log("tabulation: ", coinChangeTab(coins, amount));
