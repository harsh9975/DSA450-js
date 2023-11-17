class Solution {
  // return true/false denoting whether the tree is Symmetric or not
  isSymmetric(root) {
    //code here
    return root == null || this.isSymmetricalHelp(root.left, root.right);
  }

  isSymmetricalHelp(left, right) {
    if (left == null || right == null) {
      return left == right;
    }
    if (left.key != right.key) return false;
    return (
      this.isSymmetricalHelp(left.left, right.right) &&
      this.isSymmetricalHelp(left.right, right.left)
    );
  }
}
