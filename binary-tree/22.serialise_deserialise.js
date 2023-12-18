// https://medium.com/@lukuoyu/leetcode-297-serialize-and-deserialize-binary-tree-tree-hard-23e158914772

var serialize = function (root) {
  // preorder dfs
  const result = [];

  function dfs(node) {
    if (!node) {
      result.push("N");
      return;
    }
    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result.join(",");
};

var deserialize = function (data) {
  const array = data.split(",");
  let i = 0;

  function dfs() {
    if (array[i] === "N") {
      i++;
      return null;
    }
    const node = new TreeNode(Number(array[i]));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
};
