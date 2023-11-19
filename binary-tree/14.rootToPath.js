class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function printPathToNode(root, target) {
  const path = [];

  function findPath(node, target) {
    if (node === null) {
      return false;
    }

    path.push(node.value);

    if (node.value === target) {
      return true;
    }

    if (findPath(node.left, target) || findPath(node.right, target)) {
      return true;
    }

    path.pop();
    return false;
  }

  findPath(root, target);

  console.log("Path from root to node " + target + ": " + path.join(" -> "));
}

// Example usage:
// Constructing a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const targetNodeValue = 5;
printPathToNode(root, targetNodeValue);
