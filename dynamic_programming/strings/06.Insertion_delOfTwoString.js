var minDistance = function (word1, word2) {
  return word1.length + word2.length - 2 * lcs(word1, word2);
};

function lcs(text1, text2) {
  let m = text1.length;
  let n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

let word1 = "leetcode",
  word2 = "etco";
console.log(minDistance(word1, word2));
