const s1 = "leetcode";
const wordDict1 = ["leet", "code"];
console.log(wordBreakRecursion(s1, wordDict1)); // Output: true

const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];
console.log(wordBreakRecursion(s2, wordDict2)); // Output: true

const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreakRecursion(s3, wordDict3)); // Output: false

function wordBreakRecursion(s, wordDict) {
  function canSegement(s) {
    if (s == "") {
      return true;
    }

    for (let word of wordDict) {
      if (s.startsWith(word) && canSegement(s.slice(word.length))) {
        return true;
      }
    }
    return false;
  }
  return canSegement(s);
}
