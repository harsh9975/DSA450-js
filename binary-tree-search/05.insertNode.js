class Solution {
  // Function to insert a node in a BST.
  insert(node, data) {
    // your code here

    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.insert(node.left, data);
    }
    if (data > node.data) {
      node.right = this.insert(node.right, data);
    }

    return node;
  }
}
