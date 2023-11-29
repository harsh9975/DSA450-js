const height = [30, 10, 60, 10, 60, 50];
const n = height.length;
let memo = {};
let dp = new Array(n + 1).fill(0);
console.log(frogJumMemo(n - 1, height, memo));

function frogJumMemo(n, height, memo) {
  if (n == 0) return 0;
  if (n in memo) {
    return memo[n];
  }
  let left =
    frogJumMemo(n - 1, height, memo) + Math.abs(height[n] - height[n - 1]);
  let right =
    n > 1
      ? frogJumMemo(n - 2, height, memo) + Math.abs(height[n] - height[n - 2])
      : Infinity;
  memo[n] = Math.min(left, right);
  return memo[n];
}

function frogJumTabul(n, height, dp) {
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    let left = dp[i - 1] + Math.abs(height[i] - height[i - 1]);
    let right =
      i > 1 ? dp[i - 2] + Math.abs(height[i] - height[i - 2]) : Infinity;
    dp[i] = Math.min(left, right);
  }
  return dp[n - 1];
}
console.log(frogJumTabul(n, height, dp));

//spaceOptimization

function frogJumSpaceOpt(n, height, dp) {
  let prev = 0;
  let prev2 = 0;
  for (let i = 1; i < n; i++) {
    let left = prev + Math.abs(height[i] - height[i - 1]);
    let right = i > 1 ? prev2 + Math.abs(height[i] - height[i - 2]) : Infinity;
    let curr = Math.min(left, right);
    prev2 = prev;
    prev = curr;
  }
  return prev;
}
console.log(frogJumSpaceOpt(n, height, dp));
