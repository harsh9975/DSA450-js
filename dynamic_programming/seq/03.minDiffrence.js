function findMinSubsetSumDiffMemo(nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  const memo = new Map();

  function subsetSumDiff(index, currentSum) {
    if (index === 0) {
      return Math.abs(totalSum - 2 * currentSum);
    }

    const key = `${index}-${currentSum}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    const include = subsetSumDiff(index - 1, currentSum + nums[index - 1]);
    const exclude = subsetSumDiff(index - 1, currentSum);

    const result = Math.min(include, exclude);
    memo.set(key, result);

    return result;
  }

  return subsetSumDiff(nums.length, 0);
}

function findMinSubsetSumDiffTab(nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  const n = nums.length;

  // Initialize a 2D array to store results of subproblems
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: totalSum + 1 }, () => false)
  );

  // Initialize the first row and column
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= totalSum; j++) {
      if (i === 0) {
        dp[i][j] = false;
      }
      if (j === 0) {
        dp[i][j] = true;
      }
    }
  }

  // Build the DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= totalSum; j++) {
      if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // Find the minimum subset sum difference
  let mini = Number.MAX_VALUE;
  for (let i = 0; i <= totalSum; i++) {
    if (dp[n - 1][i] === true) {
      const diff = Math.abs(i - (totalSum - i));
      mini = Math.min(mini, diff);
    }
  }
  return mini;
}

const nums = [3, 9, 7, 3];
console.log("Memo: ", findMinSubsetSumDiffMemo(nums));
console.log("Tab: ", findMinSubsetSumDiffTab(nums));
