/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length == 0 || postorder.length == 0) {
    return null;
  }

  const rootValue = postorder[postorder.length - 1];
  const root = new TreeNode(rootValue);

  const index = inorder.indexOf(rootValue);

  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(
    inorder.slice(index + 1),
    postorder.slice(index, postorder.length - 1)
  );

  return root;
};
