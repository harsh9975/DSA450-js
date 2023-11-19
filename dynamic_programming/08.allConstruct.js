const allContruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allContruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allContruct("purple", ["purp", "p", "ur", "le", "purpl"]));

const allContructTab = (target, wordBank) => {
  const dp = new Array(target.length + 1).fill(null).map(() => []);
  dp[0] = [[]];
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) == word) {
        const newCombination = dp[i].map((item) => [...item, word]);
        dp[i + word.length].push(...newCombination);
      }
    }
  }
  return dp[target.length];
};

console.log(allContructTab("purple", ["purp", "p", "ur", "le", "purpl"]));
