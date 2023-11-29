const height = [30, 10, 60, 10, 60, 50];
const n = height.length;
let memo = {};
let k = 2;
let dp = new Array(n + 1).fill(0);
console.log(frogJumMemo(n - 1, height, memo, k));

function frogJumMemo(n, height, memo, k) {
  console.log(memo);
  if (n == 0) return 0;
  if (n in memo) {
    return memo[n];
  }
  let minSteps = Infinity;
  for (let j = 1; j <= k; j++) {
    if (n - j >= 0) {
      const jump =
        frogJumMemo(n - j, height, memo, k) +
        Math.abs(height[n] - height[n - j]);
      minSteps = Math.min(minSteps, jump);
    }
  }
  memo[n] = minSteps;
  return memo[n];
}

function frogJumTabul(n, height, dp) {
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    let minStep = Infinity;
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) {
        let jump = dp[i - j] + Math.abs(height[i] - height[i - j]);
        minStep = Math.min(minStep, jump);
      }
    }
    dp[i] = minStep;
  }
  return dp[n - 1];
}
console.log(frogJumTabul(n, height, dp));
