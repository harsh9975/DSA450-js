// let arr = [11, 4, 4, 12, 5, 2];
let arr = [2, 3, 1, 1];
let n = arr.length;
let sum = 4;
console.log(isSubsetSum(arr, n, sum));
console.log(isSubsetSumTab(arr, n, sum));

function isSubsetSum(arr, n, sum) {
  const memo = {};
  return canSum(sum, n, arr, memo);
}

function canSum(targetSum, n, arr, memo) {
  const key = `${n}-${targetSum}`;
  if (memo[key] !== undefined) {
    return memo[key];
  }

  if (n === 0) {
    memo[key] = targetSum === 0 ? true : false;
    return memo[key];
  }

  const pick = canSum(targetSum - arr[n - 1], n - 1, arr, memo);
  const notPick = canSum(targetSum, n - 1, arr, memo);

  const result = pick || notPick;
  memo[key] = result;

  return result;
}

function isSubsetSumTab(arr, n, sum) {
  // Create a DP array to store the results of subproblems
  const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(false));

  // If sum is 0, then answer is true (empty subset is always there)
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Fill the DP array using the bottom-up approach
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // If the current element is greater than the sum, it can't be included
      if (arr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
        console.log(`ans not pick ==> dp[${i}][${j}]`, dp[i][j]);
      } else {
        // Include the current element or exclude it
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
        console.log(`ans pick ==> dp[${i}][${j}]`, dp[i][j]);
      }
    }
  } // The result is stored at the bottom-right corner of the DP array
  console.log(n, sum);
  console.log(dp);
  return dp[n][sum];
}
