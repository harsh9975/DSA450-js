let numCourses = 2;
let prerequisites = [
  [1, 0],
  [0, 1],
];

console.log("ans", canFinish(numCourses, prerequisites));

function canFinish(numCourses, prerequisites) {
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

  let finishedCourse = 0;

  while (queue.length > 0) {
    const course = queue.shift();
    finishedCourse++;
    for (adjacency of graph[course]) {
      inDegree[adjacency]--;
      if (inDegree[adjacency] == 0) {
        queue.push(adjacency);
      }
    }
  }

  return finishedCourse === numCourses;
}
