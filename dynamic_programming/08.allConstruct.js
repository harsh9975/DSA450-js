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
