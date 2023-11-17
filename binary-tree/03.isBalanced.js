class Solution {
  // Function to check whether a binary tree is balanced or not.
  isBalancedNaive(root) {
    if (root === null) {
      return true;
    }

    let lh = this.height(root.left);
    let rh = this.height(root.right);

    if (Math.abs(lh - rh) > 1) {
      return false;
    }

    let leftBalanced = this.isBalanced(root.left);
    let rightBalanced = this.isBalanced(root.right);

    return leftBalanced && rightBalanced;
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  //Optimal approach
  isBalancedOptimal(root) {
    return this.dfsHeight(root) != -1;
  }

  dfsHeight(node) {
    if (node == null) return 0;
    let lh = this.dfsHeight(node.left);
    if (lh == -1) return -1;
    let rh = this.dfsHeight(node.right);
    if (rh == -1) return -1;
    if (Math.abs(lh - rh) > 1) return -1;
    return 1 + Math.max(lh, rh);
  }
}
