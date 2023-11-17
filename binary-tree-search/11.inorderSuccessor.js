class Solution {
  // returns the inorder successor of the Node x in BST (rooted at 'root')
  inOrderSuccessor(root, x) {
    //code here
    let ans = null;
    if (root == null) return null;
    let curr = x.data;
    while (root != null) {
      if (curr >= root.data) {
        root = root.right;
      } else {
        ans = root;
        root = root.left;
      }
    }
    return ans;
  }
}
