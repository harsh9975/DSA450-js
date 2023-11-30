/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  //   return dp[m][n];
  let ans = "";
  let i = m,
    j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] == str2[j - 1]) {
      ans += str1[i - 1];
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      ans += str1[i - 1];
      i--;
    } else {
      ans += str2[j - 1];
      j--;
    }
  }
  while (i > 0) {
    ans += str1[i - 1];
    i--;
  }
  while (j > 0) {
    ans += str2[j - 1];
    j--;
  }

  return ans.split("").reverse().join("");
};

let str1 = "abac",
  str2 = "cab";
console.log(shortestCommonSupersequence(str1, str2));
