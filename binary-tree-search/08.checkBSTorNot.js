var isValidBST = function (root) {
  return checkBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function checkBST(node, minVal, maxVal) {
  if (node == null) return true;

  if (node.val <= minVal || node.val >= maxVal) return false;
  return (
    checkBST(node.left, minVal, node.val) &&
    checkBST(node.right, node.val, maxVal)
  );
}
