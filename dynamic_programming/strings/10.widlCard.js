var isMatchMemo = function (s, p) {
  let memo = {};
  return isMatchUtil(s, p, 0, 0, memo);
};

function isMatchUtil(s, p, i, j, memo) {
  if (i === s.length && j === p.length) {
    return true; // Both strings are empty, match
  }

  if (j === p.length) {
    return false; // Pattern is empty, no match
  }

  const key = `${i}-${j}`;
  if (key in memo) {
    return memo[key];
  }

  let match = false;

  if (i < s.length && (s[i] === p[j] || p[j] === "?")) {
    match = isMatchUtil(s, p, i + 1, j + 1, memo);
  } else if (p[j] === "*") {
    match =
      isMatchUtil(s, p, i + 1, j, memo) || isMatchUtil(s, p, i, j + 1, memo);
  }

  memo[key] = match;
  return match;
}

var isMatchTabulation = function (s, p) {
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  );

  dp[0][0] = true; // Empty pattern matches empty string

  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }

  return dp[s.length][p.length];
};
console.log(isMatchMemo("cb", "?a"));
console.log(isMatchTabulation("cb", "?b"));
