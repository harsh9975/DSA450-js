const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
let n = maze.length;
const result = findPaths(n, maze);
console.log(result);

function findPaths(n, m) {
  let paths = [];
  let path = new Array(n).fill("");
  const directions = ["D", "L", "R", "U"];
  const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));

  function isSafe(x, y, visited) {
    return x >= 0 && x < n && y >= 0 && y < n && m[x][y] == 1 && !visited[x][y];
  }

  function findPath(x, y, visited, index) {
    if (x == n - 1 && y == n - 1) {
      paths.push(path.join(""));
      return;
    }
    visited[x][y] = true;
    for (const dir of directions) {
      const newX = x + (dir == "U" ? -1 : dir == "D" ? 1 : 0);
      const newY = y + (dir == "L" ? -1 : dir == "R" ? 1 : 0);

      if (isSafe(newX, newY, visited)) {
        path[index] = dir;
        findPath(newX, newY, visited, index + 1);
      }
    }
    visited[x][y] = false;
  }

  findPath(0, 0, visited, 0);

  return paths.sort();
}
