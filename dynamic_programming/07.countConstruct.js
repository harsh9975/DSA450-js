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
