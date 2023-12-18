class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  minTime(root, target) {
    let map = new Map();
    if (root == null) return 0;
    this.buildGraph(root, null, map);
    let visited = new Set();
    let finalTime = 0;
    let queue = [{ node: target, time: 0 }];

    while (queue.length > 0) {
      let { node, time } = queue.shift();
      visited.add(node);

      for (let neighbor of map.get(node)) {
        if (!visited.has(neighbor.key)) {
          queue.push({ node: neighbor.key, time: time + 1 });
        }
      }
      finalTime = time;
    }

    return finalTime;
  }

  buildGraph(node, parent, map) {
    if (node == null) return;
    if (!map.has(node.key)) {
      map.set(node.key, []);
    }

    if (parent) {
      map.get(node.key).push(parent);
      map.get(parent.key).push(node);
    }

    this.buildGraph(node.left, node, map);
    this.buildGraph(node.right, node, map);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.right.left = new Node(7);
root.left.right.right = new Node(8);
root.right.right.left = new Node(9);
root.right.right.right = new Node(10);
root.right.right.right.right = new Node(11);
root.right.right.right.right.right = new Node(12);
root.right.right.right.right.right.right = new Node(13);

const solution = new Solution();
console.log(solution.minTime(root, 8));
