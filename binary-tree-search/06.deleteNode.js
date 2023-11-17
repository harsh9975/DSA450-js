var deleteNode = function (root, key) {
  if (root == null) {
    return null;
  }
  if (root.val == key) {
    return helper(root);
  }
  let dummyNode = root;
  while (root != null) {
    if (key < root.val) {
      if (root.left != null && root.left.val == key) {
        root.left = helper(root.left);
        break;
      } else {
        root = root.left;
      }
    } else {
      if (root.right !== null && root.right.val == key) {
        root.right = helper(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }
  return dummyNode;
};

function helper(root) {
  if (root.left == null) {
    return root.right;
  }
  if (root.right == null) {
    return root.left;
  }
  let rightChild = root.right;
  let lastRight = findLastRight(root.left);
  lastRight.right = rightChild;
  return root.left;
}

function findLastRight(root) {
  if (root.right === null) {
    return root;
  }
  return findLastRight(root.right);
}
