var minDistance = function (word1, word2) {
  let memo = {};
  return minDistanceUtil(
    word1.length - 1,
    word2.length - 1,
    word1,
    word2,
    memo
  );
};

function minDistanceUtil(i, j, word1, word2, memo) {
  if (i === -1) return j + 1;
  if (j === -1) return i + 1;

  let key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }

  if (word1[i] === word2[j]) {
    memo[key] = minDistanceUtil(i - 1, j - 1, word1, word2, memo);
  } else {
    memo[key] =
      Math.min(
        minDistanceUtil(i, j - 1, word1, word2, memo),
        minDistanceUtil(i - 1, j, word1, word2, memo),
        minDistanceUtil(i - 1, j - 1, word1, word2, memo)
      ) + 1;
  }

  return memo[key];
}

var minDistanceTab = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
};

let word1 = "intention",
  word2 = "execution";
console.log("memo: ", minDistance(word1, word2));
console.log("tabulation: ", minDistanceTab(word1, word2));
