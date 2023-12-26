/**
 * @param {number[][]} heights
 * @return {number}
 */

class _PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(cell, effort) {
    this.queue.push({ cell, effort });
    this.queue.sort((a, b) => a.effort - b.effort);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

var minimumEffortPath = function (heights) {
  let n = heights.length;
  let m = heights[0].length;
  const currEffort = Array.from(Array(n), () => Array(m).fill(Infinity));

  currEffort[0][0] = [0];
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const pq = new _PriorityQueue();
  pq.enqueue([0, 0], 0);

  while (!pq.isEmpty()) {
    const {
      cell: [row, col],
      effort,
    } = pq.dequeue();

    if (effort > currEffort[row][col]) continue;
    if (row === n - 1 && col === m - 1) return effort;

    for (let d of direction) {
      let r = row + d[0];
      let c = col + d[1];

      if (r >= 0 && c >= 0 && r < n && c < m) {
        const newEffort = Math.max(
          effort,
          Math.abs(heights[row][col] - heights[r][c])
        );
        if (newEffort < currEffort[r][c]) {
          currEffort[r][c] = newEffort;
          pq.enqueue([r, c], newEffort);
        }
      }
    }
  }
  return -1;
};
