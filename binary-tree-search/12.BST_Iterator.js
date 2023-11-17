/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._inOrderLeftmost(root);
};

BSTIterator.prototype._inOrderLeftmost = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (!this.hasNext()) {
    return null;
  }

  const currentNode = this.stack.pop();
  if (currentNode.right) {
    this._inOrderLeftmost(currentNode.right);
  }

  return currentNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
