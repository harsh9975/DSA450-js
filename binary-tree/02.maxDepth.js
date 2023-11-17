class Solution {
  //Function to find the height of a binary tree.
  // Time Complexity: O(N)
  // Space Complexity: O(N) ( Queue data structure is used )
  height(node) {
    if (node == null) {
      return 0;
    }
    const queue = [node];
    let level = 0;
    while (queue.length > 0) {
      let size = queue.length;
      while (size > 0) {
        const curr = queue.shift();
        if (curr.right) {
          queue.push(curr.right);
        }
        if (curr.left) {
          queue.push(curr.left);
        }
        size--;
      }
      level++;
    }
    return level;
  }

  heightOptimal(node) {
    if (node == null) return 0;
    let lf = this.height(node.left);
    let lr = this.height(node.right);

    return 1 + Math.max(lf, lr);
  }
}
