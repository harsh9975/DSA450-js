var kthSmallest = function (root, k) {
  let n = 0;

  const inorder = (node) => {
    if (!node) return;

    const leftResult = inorder(node.left);
    if (leftResult !== undefined) return leftResult;

    if (++n === k) return node.val;

    return inorder(node.right);
  };

  return inorder(root);
};

const kthLargest = (root, k) => {
  let n = 0;

  const reverseInorder = (node) => {
    if (!node) return;

    const rightResult = reverseInorder(node.right);
    if (rightResult !== undefined) return rightResult;

    if (++n === k) return node.val;

    return reverseInorder(node.left);
  };

  return reverseInorder(root);
};
