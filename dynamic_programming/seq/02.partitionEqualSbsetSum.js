let nums = [
  53, 63, 64, 51, 78, 28, 26, 32, 60, 20, 73, 32, 21, 21, 7, 45, 82, 89, 44, 43,
  85, 93, 30, 100, 91, 51, 46, 95, 65, 20, 78, 2, 45, 34, 3, 26, 25, 30, 80, 15,
  7, 45, 82, 74, 8, 59, 74, 3, 38, 20, 97, 47, 21, 70, 84, 18, 90, 68, 38, 24,
  53, 83, 27, 57, 1, 99, 2, 60, 21, 4, 48, 71, 5, 87, 78, 72, 81, 40, 65, 32,
  14, 30, 94, 58, 14, 49, 82, 4, 51, 66, 5, 50, 90, 22, 90, 100, 50, 44, 68,
  100,
];
console.log(canPartitionTab(nums));
console.log(canPartitionMemo(nums));

function canPartitionMemo(nums) {
  let n = nums.length;
  let memo = {};
  let total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2) return false;
  let target = Math.floor(total / 2);
  return canSum(n, target, nums, memo);
}

function canSum(n, targetSum, arr, memo) {
  const key = `${n}-${targetSum}`;
  if (key in memo) {
    return memo[key];
  }
  if (n == 0) {
    memo[key] = targetSum === 0 ? true : false;
    return memo[key];
  }

  let pick = canSum(n - 1, targetSum - arr[n - 1], arr, memo);
  let notPick = canSum(n - 1, targetSum, arr, memo);

  const result = pick || notPick;
  memo[key] = result;
  return result;
}
function canPartitionTab(nums) {
  let n = nums.length;
  let total = nums.reduce((sum, num) => sum + num, 0);

  if (total % 2) return false;

  let target = Math.floor(total / 2);

  let dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(target + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[n][target];
}
