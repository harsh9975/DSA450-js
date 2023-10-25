let grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
let res = numberOfEnclaves(grid);
console.log("res: ", res);

function numberOfEnclaves(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let vis = new Array(n).fill(null).map(() => new Array(m).fill(0));
  let queue = [];
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // first row, first col, last row, last col
      if (i == 0 || j == 0 || i == n - 1 || j == m - 1) {
        if (grid[i][j] == 1) {
          queue.push([i, j]);
          vis[i][j] = 1;
        }
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();
    for (let d of direction) {
      let r = row + d[0];
      let c = col + d[1];
      if (
        r >= 0 &&
        r < n &&
        c >= 0 &&
        c < m &&
        vis[r][c] == 0 &&
        grid[r][c] == 1
      ) {
        queue.push([r, c]);
        vis[r][c] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1 && vis[i][j] == 0) {
        count++;
      }
    }
  }
  return count;
}
