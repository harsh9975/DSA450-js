let numCourses = 4;
let prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log("ans: ", findOrder(numCourses, prerequisites));

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const order = [];

  while (queue.length > 0) {
    const course = queue.shift();
    order.push(course);
    for (const adjacency of graph[course]) {
      inDegree[adjacency]--;
      if (inDegree[adjacency] === 0) {
        queue.push(adjacency);
      }
    }
  }

  if (order.length === numCourses) {
    return order; // Return the valid order
  } else {
    return []; // No valid order exists, return an empty array
  }
}
