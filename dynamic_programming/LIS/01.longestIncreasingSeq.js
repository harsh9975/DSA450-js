var lengthOfLISMemo = function (nums) {
  let memo = {};
  return lisMemo(nums, -1, 0, memo);
};

function lisMemo(nums, prevIndex, curIndex, memo) {
  if (curIndex === nums.length) {
    return 0;
  }

  let key = `${prevIndex + 1}-${curIndex}`;
  if (key in memo) {
    return memo[key];
  }

  let take = 0;
  if (prevIndex == -1 || nums[prevIndex] < nums[curIndex]) {
    take = 1 + lisMemo(nums, curIndex, curIndex + 1, memo);
  }
  let notTake = 0 + lisMemo(nums, prevIndex, curIndex + 1, memo);

  memo[key] = Math.max(take, notTake);
  return memo[key];
}

var lengthOfLISTab = function (nums) {
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
  return dp[0][0];
};

var lengthOfLISOptimised = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);

  return Math.max(...dp);
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("memo: ", lengthOfLISMemo(nums));
console.log("tab: ", lengthOfLISTab(nums));
