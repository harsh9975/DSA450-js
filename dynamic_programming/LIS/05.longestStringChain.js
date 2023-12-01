var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  const n = words.length;

  const isPredecessor = (wordA, wordB) => {
    if (wordB.length !== wordA.length + 1) {
      return false;
    }

    let i = 0;
    let j = 0;
    let diffCount = 0;

    while (i < wordA.length && j < wordB.length) {
      if (wordA[i] === wordB[j]) {
        i++;
      } else {
        diffCount++;
        if (diffCount > 1) {
          return false;
        }
      }
      j++;
    }

    return true;
  };

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(words[j], words[i])) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
};

const words1 = ["a", "b", "ba", "bca", "bda", "bdca"];
console.log(longestStrChain(words1)); // Output: 4

const words2 = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
console.log(longestStrChain(words2)); // Output: 5

const words3 = ["abcd", "dbqca"];
console.log(longestStrChain(words3));
