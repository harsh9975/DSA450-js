var jump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    const maxJump = Math.min(nums[i], n - 1 - i);
    for (let j = 1; j <= maxJump; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i + j]);
    }
  }

  return dp[0];
};
