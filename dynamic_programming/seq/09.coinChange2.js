var changeMemo = function (amount, coins) {
  const memo = {};

  function countCombinations(target, index) {
    if (target === 0) {
      return 1; // One way to make up the amount - using no coins
    }

    if (target < 0 || index >= coins.length) {
      return 0; // Cannot make up the amount with the current coin or no more coins available
    }

    const key = `${target}-${index}`;
    if (key in memo) {
      return memo[key];
    }

    // Count combinations by including the current coin and excluding it
    const includeCurrent = countCombinations(target - coins[index], index);
    const excludeCurrent = countCombinations(target, index + 1);

    memo[key] = includeCurrent + excludeCurrent;
    return memo[key];
  }

  return countCombinations(amount, 0);
};

var changeTab = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);

  // There is 1 way to make up the amount of 0 (base case)
  dp[0] = 1;

  // Iterate through each coin and update the dp array
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};

console.log("memo: ", changeMemo(5, [1, 2, 5])); // Output: 4
console.log("memo: ", changeMemo(3, [2])); // Output: 0
console.log("memo: ", changeMemo(10, [10])); // Output: 1

console.log("tab: ", changeTab(5, [1, 2, 5])); // Output: 4
console.log("tab: ", changeTab(3, [2])); // Output: 0
console.log("tab: ", changeTab(10, [10])); // Output: 1
