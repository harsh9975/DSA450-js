function minCoins(V, M, coins) {
  // Create a dp array to store the minimum number of coins needed for each value from 0 to V
  const dp = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);

  // Base case: 0 coins are needed to make a change for 0 cents
  dp[0] = 0;

  // Iterate over each coin
  for (let coin of coins) {
    // Update dp array for each value from coin to V
    for (let i = coin; i <= V; i++) {
      // Choose the minimum between the current value and the value after adding the current coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // If dp[V] is still Number.MAX_SAFE_INTEGER, it means it's not possible to make change for V cents
  return dp[V] === Number.MAX_SAFE_INTEGER ? -1 : dp[V];
}

// Example usage
console.log(minCoins(30, 3, [25, 10, 5])); // Output: 2
console.log(minCoins(11, 4, [9, 6, 5, 1])); // Output: 2

class Solution {
  minCoins(coins, V, M) {
    let count = 0;
    for (let i = M - 1; i >= 0; i--) {
      while (V >= coins[i]) {
        V -= coins[i];
        count++;
      }
    }
    return count;
  }
}
