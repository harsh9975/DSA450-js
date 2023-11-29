// Recursive approach with memoization
function countSubsetsWithSum(arr, n, k) {
  const memo = {};
  return countSubsets(arr, n, k, memo);
}

function countSubsets(arr, n, k, memo) {
  const key = `${n}-${k}`;
  if (memo[key] !== undefined) {
    return memo[key];
  }

  if (n === 0) {
    memo[key] = k === 0 ? 1 : 0;
    return memo[key];
  }

  const includeCurrent = countSubsets(arr, n - 1, k - arr[n - 1], memo);
  const excludeCurrent = countSubsets(arr, n - 1, k, memo);

  memo[key] = includeCurrent + excludeCurrent;

  return memo[key];
}

// Tabulation (bottom-up dynamic programming) approach
function countSubsetsWithSumTab(arr, n, k) {
  // Create a DP array to store the count of subsets with sum
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  // Initialize the first column of the DP array
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  // Fill the DP array using the bottom-up approach
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // The result is stored at the bottom-right corner of the DP array
  return dp[n][k];
}

// Test case
let arr = [1, 4, 4, 5];
let n = arr.length;
let k = 5;

console.log("Recursive with memoization:", countSubsetsWithSum(arr, n, k));
console.log("Tabulation:", countSubsetsWithSumTab(arr, n, k));
