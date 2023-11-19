const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let remianederCombination = bestSum(remainder, numbers, memo);

    if (remianederCombination !== null) {
      const combination = [...remianederCombination, num];
      //if the combination is shorter than shortest combination
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
        memo[targetSum] = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

//tanulation
const bestSumTab = (target, numbers) => {
  const dp = new Array(target + 1).fill(null);
  dp[0] = [];
  for (let i = 0; i <= target; i++) {
    if (dp[i] != null) {
      for (let num of numbers) {
        const combination = [...dp[i], num];
        if (!dp[i + num] || dp[i + num].length > combination.length) {
          dp[i + num] = combination;
        }
        // dp[i+num] = [...dp[i],num];
      }
    }
  }
  return dp[target];
};

console.log(bestSumTab(7, [5, 3, 4, 7]));
console.log(bestSumTab(8, [2, 3, 5]));
console.log(bestSumTab(8, [1, 4, 5]));
console.log(bestSumTab(100, [1, 2, 5, 25]));
