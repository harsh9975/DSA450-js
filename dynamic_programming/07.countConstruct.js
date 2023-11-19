const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }
  if (target == "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word.length) == 0) {
      const suffix = target.slice(word.length);
      const numWaysForRest = countConstruct(suffix, wordBank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
};

const countConstructTab = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(null);
  dp[0] = 1;
  for (let i = 0; i < target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) == word) {
        dp[i + word.length] += dp[i];
      }
    }
  }
  return dp[target.length];
};
