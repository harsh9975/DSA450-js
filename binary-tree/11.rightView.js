class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const nine = new Node(9);
const ten = new Node(10);

one.left = two;
one.right = three;
two.left = four;
two.right = seven;
four.right = five;
five.right = six;
three.left = nine;
three.right = ten;

function rightView(root) {
  const result = [];
  rightDFS(root, 0, result);
  return result;
}

function rightDFS(node, level, result) {
  if (!node) {
    return;
  }
  if (level == result.length) {
    result.push(node.val);
  }
  rightDFS(node.right, level + 1, result);
  rightDFS(node.left, level + 1, result);
}
console.log("ans: ", rightView(one));
