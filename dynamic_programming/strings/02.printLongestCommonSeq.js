const text1 = "abcde";
const text2 = "ace";
console.log("memo: ", longestCommonSubsequenceMemo(text1, text2));
console.log("tabulation: ", printLCSTabulation(text1, text2));

function longestCommonSubsequenceMemo(text1, text2) {
  let memo = {};
  let length = lcs(text1, text2, text1.length, text2.length, memo);
  let sequence = printLCS(text1, text2, memo);
  return { length, sequence };
}

function lcs(text1, text2, i, j, memo) {
  if (i === 0 || j === 0) {
    return 0;
  }

  const key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }

  if (text1[i - 1] === text2[j - 1]) {
    memo[key] = 1 + lcs(text1, text2, i - 1, j - 1, memo);
  } else {
    memo[key] = Math.max(
      lcs(text1, text2, i - 1, j, memo),
      lcs(text1, text2, i, j - 1, memo)
    );
  }

  return memo[key];
}

function printLCS(text1, text2, memo) {
  let i = text1.length;
  let j = text2.length;
  let result = "";

  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      result = text1[i - 1] + result;
      i--;
      j--;
    } else if (memo[`${i - 1}-${j}`] > memo[`${i}-${j - 1}`]) {
      i--;
    } else {
      j--;
    }
  }

  while (i > 0) {
    if (text1[i - 1] === text2[j]) {
      result = text1[i - 1] + result;
    }
    i--;
  }

  return result;
}

function printLCSTabulation(text1, text2) {
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

  let ans = "";
  let i = m,
    j = m;
  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      ans = text1[i - 1] + ans;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return ans;
}
