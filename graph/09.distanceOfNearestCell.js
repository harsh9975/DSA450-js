let grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
let result = nearestElement(grid);
console.log(result);

//Given an m x n binary matrix mat, return the distance of the nearest 1 for each cell.
function nearestElement(grid) {
  let n = grid.length;
  let m = grid[0].length;

  let dis = new Array(n).fill(null).map(() => new Array(m).fill(-1));
  let queue = [];
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        queue.push([i, j]);
        dis[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let d of direction) {
      let r = x + d[0];
      let c = y + d[1];

      if (r >= 0 && r < n && c >= 0 && c < m && dis[r][c] == -1) {
        dis[r][c] = dis[x][y] + 1;
        queue.push([r, c]);
      }
    }
  }
  return dis;
}

//Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
var updateMatrixLeetcode = function (mat) {
  let n = mat.length;
  let m = mat[0].length;

  let dis = new Array(n)
    .fill(null)
    .map(() => new Array(m).fill(Number.MAX_SAFE_INTEGER));
  let queue = [];
  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        dis[i][j] = 0;
      }
    }
  }
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let d of direction) {
      let r = x + d[0];
      let c = y + d[1];

      if (r >= 0 && r < n && c >= 0 && c < m) {
        if (dis[r][c] > dis[x][y] + 1) {
          dis[r][c] = dis[x][y] + 1;
          queue.push([r, c]);
        }
      }
    }
  }
  return dis;
};
