function findWaysUtil(ind, target, arr, dp) {
  if (ind === 0) {
    if (target === 0 && arr[0] === 0) {
      return 2;
    }
    if (target === 0 || target === arr[0]) {
      return 1;
    }
    return 0;
  }

  if (dp[ind][target] !== -1) {
    return dp[ind][target];
  }

  let notTaken = findWaysUtil(ind - 1, target, arr, dp);

  let taken = 0;
  if (arr[ind] <= target) {
    taken = findWaysUtil(ind - 1, target - arr[ind], arr, dp);
  }

  return (dp[ind][target] = notTaken + taken);
}

function findWays(num, k) {
  let n = num.length;
  let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));

  for (let row of dp) {
    row.fill(-1);
  }

  return findWaysUtil(n - 1, k, num, dp);
}

// Test case
let arr = [0, 0, 1];
let n = arr.length;
let target = 1;

console.log("Count of subsets with sum:", findWays(arr, n, target));
