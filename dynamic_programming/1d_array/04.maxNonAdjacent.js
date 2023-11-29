const arr = [2, 1, 4, 9];
let n = arr.length;
const dp = new Array(n + 1).fill(-1);
let memo = {};
console.log(maxNonAdjSumMemo(n - 1, arr, memo));

function maxNonAdjSumMemo(index, arr, memo) {
  if (index == 0) return arr[index];
  if (index < 0) return 0;
  if (index in memo) {
    return memo[index];
  }
  let pick = arr[index] + maxNonAdjSumMemo(index - 2, arr, memo);
  let notPick = 0 + maxNonAdjSumMemo(index - 1, arr, memo);

  memo[index] = Math.max(pick, notPick);
  return memo[index];
}

function maxNumAdjSumTab(arr) {
  const n = arr.length;
  if (n === 0) return 0;

  let dp = new Array(n).fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    let pick = (i - 2 >= 0 ? dp[i - 2] : 0) + arr[i];
    let notPick = dp[i - 1];
    dp[i] = Math.max(pick, notPick);
  }

  return dp[n - 1];
}

function maxNumAdjSumTab(nums) {
  const n = nums.length;
  if (n === 0) return NaN;
  if (n === 1) return nums[0];

  let prevMax = nums[0];
  let currMax = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    let temp = currMax;
    currMax = Math.max(currMax, prevMax + nums[i]);
    prevMax = temp;
  }

  return currMax;
}
