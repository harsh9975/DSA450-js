var minInsertions = function (s) {
  return s.length - longestPalindromeSubseqTab(s);
};

function longestPalindromeSubseqTab(s) {
  let s2 = s.split("").reverse().join("");
  return longestPalindromeSubsequenceTabulation(s, s2);
}

function longestPalindromeSubsequenceTabulation(text1, text2) {
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

let str1 = "zzazz";
let str2 = "leetcode";
console.log(minInsertions(str1));
console.log(minInsertions(str2));
