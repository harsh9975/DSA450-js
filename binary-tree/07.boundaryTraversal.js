class Solution {
  boundary(root) {
    // your code goes here
    let res = [];
    if (root == null) return res;
    if (!this.isLeaf(root)) {
      res.push(root.data);
    }
    this.addLeftBoundary(root, res);
    this.addLeaves(root, res);
    this.addRightBoundary(root, res);
    return res;
  }

  isLeaf(node) {
    return !node.left && !node.right;
  }

  addLeftBoundary(node, res) {
    let curr = node.left;

    while (curr) {
      if (!this.isLeaf(curr)) {
        res.push(curr.data);
      }
      if (curr.left) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  addRightBoundary(node, res) {
    let curr = node.right;
    let temp = [];

    while (curr) {
      if (!this.isLeaf(curr)) {
        temp.push(curr.data);
      }
      if (curr.right) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    for (let i = temp.length - 1; i >= 0; i--) {
      res.push(temp[i]);
    }
  }

  addLeaves(node, res) {
    if (this.isLeaf(node)) {
      res.push(node.data);
      return;
    }
    if (node.left) {
      this.addLeaves(node.left, res);
    }
    if (node.right) {
      this.addLeaves(node.right, res);
    }
  }
}
