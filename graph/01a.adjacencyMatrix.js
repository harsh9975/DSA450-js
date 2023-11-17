const vertices = ["A", "B", "C", "D", "E"];
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const vertexIndices = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

//findAdjacency
console.log(findAdjacency("B"));
function findAdjacency(node) {
  const adjacencyNodes = [];
  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = vertexIndices[node];
    if (adjacencyMatrix[nodeVertex][i] === 1) {
      adjacencyNodes.push(vertices[i]);
    }
  }

  return adjacencyNodes;
}

function isConnected(node1, node2) {
  nodeVer1 = vertexIndices[node1];
  nodeVer2 = vertexIndices[node2];
  return !!adjacencyMatrix[nodeVer1][nodeVer2];
}

console.log(isConnected("A", "B"));
