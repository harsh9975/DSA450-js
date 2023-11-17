class Solution {
  constructor() {
    this.max = 0;
  }

  // Function to return the diameter of a Binary Tree.
  //Naive approach
  diameter(root) {
    if (root == null) {
      return 0;
    }

    this.calculateDiameter(root);

    return this.max;
  }

  calculateDiameter(node) {
    if (node == null) {
      return 0;
    }

    let lh = this.height(node.left);
    let rh = this.height(node.right);
    this.max = Math.max(lh + rh + 1, this.max);

    this.calculateDiameter(node.left);
    this.calculateDiameter(node.right);
  }

  height(node) {
    if (node == null) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  //optimal approach

  diameterOptimal(root) {
    let max = { value: 0 }; // Use an object to pass max by reference
    if (root == null) {
      return 0;
    }

    this.calculateDiameter(root, max);

    return max.value;
  }

  calculateDiameter(node, max) {
    if (node == null) {
      return 0;
    }

    let lh = this.calculateDiameter(node.left, max);
    let rh = this.calculateDiameter(node.right, max);

    // Update max.value with the current diameter
    max.value = Math.max(max.value, lh + rh + 1);

    // Return the height of the current node's subtree
    return Math.max(lh, rh) + 1;
  }
}
