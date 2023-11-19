const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") {
    return true;
  }
  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) == true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

//tabulation
const canConstructTab = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (dp[i] == true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) == word) {
          dp[i + word.length] = true;
        }
      }
    }
  }
  return dp[target.length];
};
