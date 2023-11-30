console.log(numDistinctMemo("rabbbit", "rabbit")); // Output: 3
console.log(numDistinctMemo("babgbag", "bag"));

function numDistinctMemo(s, t) {
  const memo = {};
  return countDistinctSubsequences(0, 0, s, t, memo);
}

function countDistinctSubsequences(i, j, s, t, memo) {
  if (j == t.length) {
    return 1;
  }

  if (i == s.length) {
    return 0;
  }

  const key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }

  let count = 0;
  // Include the current character of s in the subsequence
  if (s[i] === t[j]) {
    count += countDistinctSubsequences(i + 1, j + 1, s, t, memo);
  }

  // Exclude the current character of s from the subsequence
  count += countDistinctSubsequences(i + 1, j, s, t, memo);

  memo[key] = count;
  return count;
}

var numDistinctTabulation = function (s, t) {
  const m = s.length;
  const n = t.length;

  // Initialize a 2D array to store the number of distinct subsequences
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // An empty string can match an empty string in one way
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];

      if (s[i - 1] === t[j - 1]) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
};

console.log(numDistinctTabulation("rabbbit", "rabbit"));
