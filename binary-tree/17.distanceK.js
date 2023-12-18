class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const zero = new Node(0);
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);

three.left = five;
three.right = one;
five.left = six;
five.right = two;
two.left = seven;
two.right = four;
one.left = zero;
one.right = eight;

var distanceK = (root, target, k) => {
  const map = new Map();
  buildGraph(root, null, map);
  let visited = new Set();
  const result = [];
  const queue = [{ node: target, distance: 0 }];

  while (queue.length > 0) {
    const { node, distance } = queue.shift();
    visited.add(node);

    if (distance == k) {
      result.push(node.value);
    }

    for (let neighbour of map.get(node.value)) {
      if (!visited.has(neighbour)) {
        queue.push({ node: neighbour, distance: distance + 1 });
      }
    }
  }

  return result;
};

function buildGraph(node, parent, map) {
  if (!node) return;

  if (!map.has(node.value)) {
    map.set(node.value, []);
  }
  if (parent) {
    map.get(node.value).push(parent);
    map.get(parent.value).push(node);
  }

  buildGraph(node.left, node, map);
  buildGraph(node.right, node, map);
}

let target = five,
  k = 2,
  root = three;
console.log(distanceK(root, target, k));
