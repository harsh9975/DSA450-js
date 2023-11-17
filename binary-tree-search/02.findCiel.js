class Solution {
  // Function to return the ceil of given number in BST.
  findCeil(root, input) {
    // your code here
    let ciel = -1;
    while (root != null) {
      if (root.data == input) {
        ciel = root.data;
        return ciel;
      }
      if (input > root.data) {
        root = root.right;
      } else {
        ciel = root.data;
        root = root.left;
      }
    }
    return ciel;
  }
}
