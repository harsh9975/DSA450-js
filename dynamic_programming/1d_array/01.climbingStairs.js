let n = 38;

var climbStairs = function (n) {
  let memo = {};
  return climbStairsMemo(n, memo);
};

function climbStairsMemo(n, memo) {
  console.log("memo", memo);
  if (n in memo) {
    return memo[n];
  }
  if (n == 0 || n == 1) return 1;

  let left = climbStairsMemo(n - 1, memo);
  let right = climbStairsMemo(n - 2, memo);
  memo[n] = left + right;
  return memo[n];
}

console.log("memo: ", climbStairs(n));

//using tabulation
function climbStairsTabulation(n) {
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log("tabulation: ", climbStairsTabulation(n));
