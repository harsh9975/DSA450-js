//MCM using recursion
//TC: O(n3)
//SC: O(n2) + O(n)
function matrixMultiplication(arr, n) {
  //your code here
  let memo = {};
  return mcmHelper(1, n - 1, arr, memo);
}

function mcmHelper(i, j, arr, memo) {
  if (i == j) {
    return 0;
  }

  let key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }

  memo[key] = Number.MAX_SAFE_INTEGER;
  for (let k = i; k < j; k++) {
    let steps =
      arr[i - 1] * arr[k] * arr[j] +
      mcmHelper(i, k, arr, memo) +
      mcmHelper(k + 1, j, arr, memo);
    memo[key] = Math.min(memo[key], steps);
  }
  return memo[key];
}

function matrixMultiplicationTab(arr, n) {
  const dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(undefined));

  for (let i = 1; i < n; i++) {
    dp[i][i] = 0;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      let mini = Number.MAX_SAFE_INTEGER;
      for (let k = i; k < j; k++) {
        let steps = arr[i - 1] * arr[k] * arr[j] + dp[i][k] + dp[k + 1][j];
        mini = Math.min(steps, mini);
      }
      dp[i][j] = mini;
    }
  }
  return dp[1][n - 1];
}

let nums = [10, 30, 5, 60];
let n = nums.length;
console.log(matrixMultiplicationTab(nums, n));
console.log(matrixMultiplication(nums, n));
