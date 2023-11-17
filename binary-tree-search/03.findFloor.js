function floor(root, x) {
  //code here
  let floor = -1;
  while (root != null) {
    if (root.data == x) {
      floor = root.data;
      return floor;
    }
    if (x > root.data) {
      floor = root.data;
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return floor;
}
