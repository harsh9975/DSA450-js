const wt = [1, 2, 4, 5];
const val = [5, 4, 8, 6];
const W = 5;
const n = wt.length;

console.log("Maximum Value (memo):", knapSack(wt, val, W, n));
console.log("Maximum Value (tabulation):", knapSackTabulation(wt, val, W, n));

function knapSack(wt, val, W, n) {
  let memo = {};
  return knapSackWay(wt, val, W, n - 1, memo);
}

function knapSackWay(wt, val, W, ind, memo) {
  if (ind === 0) {
    return wt[0] <= W ? val[0] : 0;
  }

  let key = `${ind}-${W}`;
  if (key in memo) {
    return memo[key];
  }

  let notPick = knapSackWay(wt, val, W, ind - 1, memo);
  let pick = 0;
  if (wt[ind] <= W) {
    pick = val[ind] + knapSackWay(wt, val, W - wt[ind], ind - 1, memo);
  }

  memo[key] = Math.max(pick, notPick);
  return memo[key];
}

function knapSackTabulation(wt, val, W, n) {
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(
          val[i - 1] + dp[i - 1][w - wt[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}
