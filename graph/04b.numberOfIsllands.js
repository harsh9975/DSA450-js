/**
 * @param {character[][]} grid
 * @return {number}
 */
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
function numIslands(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  let rows = grid.length;
  let cols = grid[0].length;
  let landCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        landCount++;
        dfs(i, j, grid, rows, cols);
      }
    }
  }
  return landCount;
}

function dfs(row, col, grid, rows, cols) {
  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  dfs(row + 1, col, grid, rows, cols);
  dfs(row - 1, col, grid, rows, cols);
  dfs(row, col + 1, grid, rows, cols);
  dfs(row, col - 1, grid, rows, cols);
  //   dfs(row + 1, col + 1, grid, rows, cols);
  //   dfs(row + 1, col - 1, grid, rows, cols);
  //   dfs(row - 1, col + 1, grid, rows, cols);
  //   dfs(row - 1, col - 1, grid, rows, cols);
}
