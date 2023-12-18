var buildTree = function (preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) {
    return null;
  }

  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);

  const rootIndex = inorder.indexOf(rootValue);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
};
