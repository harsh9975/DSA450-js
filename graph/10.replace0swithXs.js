let grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "O"],
];
let n = grid.length;
let m = grid[0].length;
let res = fill(grid, n, m);
console.log("res: ", res);

function fill(grid, n, m) {
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let vis = new Array(n).fill(null).map(() => new Array(m).fill(0));
  for (let j = 0; j < m; j++) {
    //first row
    if (vis[0][j] == 0 && grid[0][j] == "O") {
      dfs(0, j, vis, grid, direction);
    }

    //last row
    if (vis[n - 1][j] == 0 && grid[n - 1][j] == "O") {
      dfs(n - 1, j, vis, grid, direction);
    }
  }

  for (let i = 0; i < n; i++) {
    // first column
    if (vis[i][0] == 0 && grid[i][0] == "O") {
      dfs(i, 0, vis, grid, direction);
    }

    // second column
    if (vis[i][m - 1] == 0 && grid[i][m - 1] == "0") {
      dfs(i, m - 1, vis, grid, direction);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (vis[i][j] == 0 && grid[i][j] == "O") {
        grid[i][j] = "X";
      }
    }
  }
  return grid;
}

function dfs(row, col, vis, grid, direction) {
  vis[row][col] = 1;
  let n = grid.length;
  let m = grid[0].length;
  for (let d of direction) {
    let r = n + d[0];
    let c = m + d[1];
    if (
      r >= 0 &&
      r < n &&
      c >= 0 &&
      c < n &&
      vis[r][c] == 0 &&
      grid[r][c] == "O"
    ) {
      dfs(r, c, vis, grid, direction);
    }
  }
}
