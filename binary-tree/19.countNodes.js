//brute force
var countNodes = function (root) {
  const count = { value: 0 };
  inOrder(root, count);
  return count.value;
};

function inOrder(node, count) {
  if (node == null) return;
  count.value++;
  inOrder(node.left, count);
  inOrder(node.right, count);
}

//better approach
function countNodes(root) {
  if (root === null) {
    return 0;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}

//optimal
var countNodes = function (root) {
  if (root === null) return 0;

  const lh = findHeightLeft(root);
  const rh = findHeightRight(root);

  if (lh === rh) {
    return (1 << lh) - 1;
  }

  const leftNodes = countNodes(root.left);
  const rightNodes = countNodes(root.right);

  return 1 + leftNodes + rightNodes;
};

function findHeightLeft(cur) {
  let height = 0;
  while (cur !== null) {
    height++;
    cur = cur.left;
  }
  return height;
}

function findHeightRight(cur) {
  let height = 0;
  while (cur !== null) {
    height++;
    cur = cur.right;
  }
  return height;
}
