var largestDivisibleSubset = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const n = nums.length;
  const dp = Array(n)
    .fill(null)
    .map(() => []);

  let maxSubset = [];

  for (let i = 0; i < n; i++) {
    let currentSubset = [nums[i]];

    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j].length + 1 > currentSubset.length) {
        currentSubset = [nums[i], ...dp[j]];
      }
    }

    dp[i] = currentSubset;

    if (currentSubset.length > maxSubset.length) {
      maxSubset = currentSubset;
    }
  }

  return maxSubset;
};
