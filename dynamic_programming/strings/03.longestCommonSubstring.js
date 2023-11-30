const text1 = "abcd";
const text2 = "abzd";
console.log("memo: ", longestCommonSubstringMemo(text1, text2));
console.log("tabulation: ", longestCommonSubstringTabulation(text1, text2));

function longestCommonSubstringMemo(text1, text2) {
  const memo = {};
  function findLongestCommonSubstringHelper(i, j, count) {
    if (i === 0 || j === 0) {
      return count;
    }

    const memoKey = `${i}-${j}-${count}`;
    if (memo.hasOwnProperty(memoKey)) {
      return memo[memoKey];
    }

    if (text1[i - 1] === text2[j - 1]) {
      count = findLongestCommonSubstringHelper(i - 1, j - 1, count + 1);
      memo[memoKey] = count;
    } else {
      count = 0;
    }

    memo[memoKey] = Math.max(
      count,
      Math.max(
        findLongestCommonSubstringHelper(i, j - 1, 0),
        findLongestCommonSubstringHelper(i - 1, j, 0)
      )
    );

    return memo[memoKey];
  }

  return findLongestCommonSubstringHelper(text1.length, text2.length, 0);
}

function longestCommonSubstringTabulation(text1, text2) {
  let m = text1.length;
  let n = text2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let ans = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        ans = Math.max(ans, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return ans;
}
