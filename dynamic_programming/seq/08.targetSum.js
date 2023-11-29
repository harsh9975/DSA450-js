var findTargetSumWaysMemo = function (nums, target) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let memo = {};
  return findTargetSumWaysHelper(nums, target, totalSum, 0, memo);
};

function findTargetSumWaysHelper(nums, target, totalSum, currentSum, memo) {
  let key = `${nums.length}-${currentSum}`;
  if (key in memo) {
    return memo[key];
  }

  if (nums.length === 0) {
    return currentSum === target ? 1 : 0;
  }

  let pick = findTargetSumWaysHelper(
    nums.slice(1),
    target,
    totalSum,
    currentSum + nums[0],
    memo
  );
  let notPick = findTargetSumWaysHelper(
    nums.slice(1),
    target,
    totalSum,
    currentSum - nums[0],
    memo
  );

  memo[key] = pick + notPick;
  return memo[key];
}

var findTargetSumWaysTab = function (nums, target) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // Checking for edge cases
  if (
    totalSum < target ||
    (totalSum + target) % 2 !== 0 ||
    target < -totalSum
  ) {
    return 0;
  }

  // Calculate the second subset sum
  const subsetSum = (totalSum + target) / 2;

  // Create a 2D array 'dp' to store dynamic programming results
  const dp = new Array(nums.length + 1);
  for (let i = 0; i <= nums.length; i++) {
    dp[i] = new Array(subsetSum + 1).fill(0);
  }

  dp[0][0] = 1; // Base case: there is 1 way to get a sum of 0 with no elements

  // Populate the dp array using a nested loop
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= subsetSum; j++) {
      dp[i][j] = dp[i - 1][j]; // Not pick the current element

      if (j >= nums[i - 1]) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]]; // Pick the current element
      }
    }
  }

  return dp[nums.length][subsetSum];
};

console.log("memo: ", findTargetSumWaysMemo([1, 1, 1, 1, 1], 3));
console.log("tab: ", findTargetSumWaysTab([1, 1, 1, 1, 1], 3));
