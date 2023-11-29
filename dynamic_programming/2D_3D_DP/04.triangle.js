let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

var minimumTotalMemo = function (triangle) {
  let memo = {};
  let n = triangle.length;
  return gridTraveller(0, 0, triangle, memo);
};

function gridTraveller(row, col, triangle, memo) {
  if (row === triangle.length) return 0; // Reached the bottom

  let curr = row + ", " + col;
  if (curr in memo) {
    return memo[curr];
  }

  let down = gridTraveller(row + 1, col, triangle, memo);
  let right = gridTraveller(row + 1, col + 1, triangle, memo);
  memo[curr] = triangle[row][col] + Math.min(down, right);
  return memo[curr];
}

var minimumTotalTab = function (triangle) {
  const n = triangle.length;

  // Initialize a 2D array to store the minimum path sums
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // Initialize the bottom row of the dp array
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  // Build the dp array from bottom to top
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      dp[row][col] =
        triangle[row][col] + Math.min(dp[row + 1][col], dp[row + 1][col + 1]);
    }
  }

  // The minimum path sum is at the top of the dp array
  return dp[0][0];
};

console.log("memo: ", minimumTotalMemo(triangle));
console.log("tabular: ", minimumTotalTab(triangle));
