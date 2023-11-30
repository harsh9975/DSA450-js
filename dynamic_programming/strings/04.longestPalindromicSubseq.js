function longestPalindromeSubseqMemo(s) {
  let s2 = s.split("").reverse().join("");
  console.log(s2);
  return longestPalindromeSubsequenceMemo(s, s2);
}

function longestPalindromeSubsequenceMemo(text1, text2) {
  let memo = {};
  return lcs(text1, text2, text1.length, text2.length, memo);
}

function lcs(text1, text2, i, j, memo) {
  if (i === 0 || j === 0) {
    return 0;
  }

  const key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }
  if (text1[i - 1] == text2[j - 1]) {
    memo[key] = 1 + lcs(text1, text2, i - 1, j - 1, memo);
  } else {
    memo[key] = Math.max(
      lcs(text1, text2, i - 1, j, memo),
      lcs(text1, text2, i, j - 1, memo)
    );
  }
  return memo[key];
}

var longestPalindromeSubseqTab = function (s) {
  let s2 = s.split("").reverse().join("");
  return longestPalindromeSubsequenceTabulation(s, s2);
};

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

const text1 = "bbbab";
console.log("memo: ", longestPalindromeSubseqMemo(text1));
console.log("tabulation: ", longestPalindromeSubseqTab(text1));
