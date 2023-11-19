const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderRes = howSum(remainder, numbers, memo);
    if (remainderRes !== null) {
      memo[targetSum] = [...remainderRes, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(300, [7, 14]));

const howSumTab = (targetSum, numbers) => {
  const dp = new Array(targetSum + 1).fill(null);
  dp[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (dp[i] != null) {
      for (let num of numbers) {
        dp[i + num] = [...dp[i], num];
      }
    }
  }
  return dp[targetSum];
};

console.log(howSumTab(7, [2, 3]));
console.log(howSumTab(300, [7, 14]));
