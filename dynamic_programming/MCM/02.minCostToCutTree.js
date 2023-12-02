/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */

var minCostMemo = function (n, cuts) {
  let c = cuts.length;
  cuts.push(n);
  cuts.unshift(0);
  cuts.sort((a, b) => a - b);
  let memo = {};
  return minCostHelper(1, c, cuts, memo);
};

function minCostHelper(start, end, cuts, memo) {
  if (start > end) {
    return 0;
  }

  const key = `${start}-${end}`;
  if (key in memo) {
    return memo[key];
  }
  let cost = Infinity;
  for (let i = start; i <= end; i++) {
    let ans =
      cuts[end + 1] -
      cuts[start - 1] +
      minCostHelper(start, i - 1, cuts, memo) +
      minCostHelper(i + 1, end, cuts, memo);
    cost = Math.min(cost, ans);
  }

  memo[key] = cost;
  return memo[key];
}

var minCostTabulation = function (n, cuts) {
  let c = cuts.length;
  cuts.push(n);
  cuts.unshift(0);
  cuts.sort((a, b) => a - b);
  let dp = Array.from({ length: c + 2 }, () => Array(c + 2).fill(0));
  for (let i = c; i >= 1; i--) {
    for (let j = 1; j <= c; j++) {
      if (i > j) continue;
      let mini = Infinity;

      // Calculate the cost for each possible cut between i and j
      for (let ind = i; ind <= j; ind++) {
        let ans = cuts[j + 1] - cuts[i - 1] + dp[i][ind - 1] + dp[ind + 1][j];
        mini = Math.min(mini, ans);
      }

      // Store the minimum cost in dp[i][j]
      dp[i][j] = mini;
    }
  }
  return dp[1][c];
};

let n = 7,
  cuts = [1, 3, 4, 5];
console.log(minCostTabulation(n, [...cuts]));
console.log(minCostMemo(n, [...cuts]));
