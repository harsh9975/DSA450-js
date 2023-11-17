function findMax(root) {
  if (root === null) {
    return null; // BST is empty
  }

  // The maximum value is the rightmost leaf node
  while (root.right !== null) {
    root = root.right;
  }

  return root.value;
}

function findMin(root) {
  if (root === null) {
    return null; // BST is empty
  }

  // The minimum value is the leftmost leaf node
  while (root.left !== null) {
    root = root.left;
  }

  return root.value;
}
