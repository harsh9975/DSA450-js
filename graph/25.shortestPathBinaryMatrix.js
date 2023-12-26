var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // If the starting or ending cell is blocked
  if (n == 1 && m == 1 && grid[0][0] == 0) return 1;
  if (grid[0][0] !== 0 || grid[n - 1][m - 1] !== 0) return -1;

  const dis = new Array(n).fill(null).map(() => new Array(m).fill(Infinity));
  dis[0][0] = 1;

  const queue = [{ distance: 1, source: [0, 0] }];
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  while (queue.length > 0) {
    const { distance, source } = queue.shift();

    for (const [dx, dy] of directions) {
      const r = source[0] + dx;
      const c = source[1] + dy;

      if (
        r >= 0 &&
        c >= 0 &&
        r < n &&
        c < m &&
        grid[r][c] === 0 &&
        distance + 1 < dis[r][c]
      ) {
        dis[r][c] = distance + 1;

        if (r === n - 1 && c === m - 1) {
          return distance + 1;
        }

        queue.push({ distance: distance + 1, source: [r, c] });
      }
    }
  }

  return -1;
};
