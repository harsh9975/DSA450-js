const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) == true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(300, [7, 14]));

//tabulation
const canSumTab = (targetSum, numbers) => {
  const dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (dp[i] == true) {
      for (let num of numbers) {
        dp[i + num] = true;
      }
    }
  }
  return dp[targetSum];
};

console.log(canSumTab(7, [2, 3]));
console.log(canSumTab(300, [7, 14]));
