class Solution {
  // Function to store the zigzag order traversal of the tree in a list.
  zigZagTraversal(root) {
    let result = [];
    if (root == null) return result;
    const queue = [];
    queue.push(root);
    let LTR = true;

    while (queue.length > 0) {
      let size = queue.length;
      let row = [];

      for (let i = 0; i < size; i++) {
        const curr = queue.shift();
        if (LTR) {
          row.push(curr.data);
        } else {
          row.unshift(curr.data);
        }

        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }

      result = [...result, ...row];
      LTR = !LTR;
    }

    return result;
  }
}
