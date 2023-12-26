// https://maideveloper.com/blog/rotting-oranges-coding-challenge
let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
let ans = orangesRoting(grid);
console.log("ans: ", ans);

function orangesRoting(grid) {
  let numRows = grid.length;
  let numCols = grid[0].length;
  const queue = [];
  let fresh = 0;
  let minute = 0;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      } else if (grid[i][j] == 1) {
        fresh++;
      }
    }
  }

  let direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length && fresh) {
    let len = queue.length;
    for (let q = 0; q < len; q++) {
      const rotten = queue.shift();
      for (let j = 0; j < direction.length; j++) {
        const d = direction[j];
        const r = rotten[0] + d[0];
        const c = rotten[1] + d[1];

        if (r >= 0 && r < numRows && c >= 0 && c < numCols && grid[r][c] == 1) {
          grid[r][c] = 2;
          queue.push([r, c]);
          fresh--;
        }
      }
    }
    minute++;
  }
  if (fresh > 0) {
    return -1;
  }
  return minute;
}
