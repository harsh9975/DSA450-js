var findLIS = function (nums, dp, currentIndex, prevIndex) {
  if (currentIndex === nums.length) {
    return [];
  }

  if (dp[currentIndex][prevIndex + 1] === dp[currentIndex + 1][prevIndex + 1]) {
    return findLIS(nums, dp, currentIndex + 1, prevIndex);
  }

  return [
    nums[currentIndex],
    ...findLIS(nums, dp, currentIndex + 1, currentIndex),
  ];
};

var lengthOfLIS = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  const dp = Array(n + 1)
    .fill(null)
    .map(() => new Array(n + 1).fill(0));

  for (let index = n - 1; index >= 0; index--) {
    for (let prev = index - 1; prev >= -1; prev--) {
      let len = 0 + dp[index + 1][prev + 1];
      if (prev == -1 || nums[index] > nums[prev]) {
        len = Math.max(len, 1 + dp[index + 1][index + 1]);
      }
      dp[index][prev + 1] = len;
    }
  }

  const lis = findLIS(nums, dp, 0, -1).reverse(); // Reverse the LIS to get the correct order
  console.log("Longest Increasing Subsequence:", lis);
  return dp[0][0];
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = lengthOfLIS(nums);
console.log("Length of LIS:", lisLength);
