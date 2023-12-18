var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 0;
  const queue = [];
  queue.push([root, 0]);

  while (queue.length) {
    const len = queue.length;
    let node,
      pos = 0,
      first = 0;

    for (let i = 0; i < len; i++) {
      [node, pos] = queue.shift();

      if (i === 0) first = pos;

      if (node.left) queue.push([node.left, pos * 2]);
      if (node.right) queue.push([node.right, pos * 2 + 1]);
    }

    const currWidth = pos - first + 1;
    maxWidth = maxWidth > currWidth ? maxWidth : currWidth;
  }

  return maxWidth;
};
