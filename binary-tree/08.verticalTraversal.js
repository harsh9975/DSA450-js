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

function verticalOrder(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const map = new Map();
  const queue = [{ node: root, hd: 0 }];

  while (queue.length > 0) {
    const { node, hd } = queue.shift();
    if (!map.has(hd, [])) {
      map.set(hd, []);
    }
    map.get(hd).push(node.val);
    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }
  const sortedArray = Array.from(map.keys()).sort((a, b) => a - b);
  for (let key of sortedArray) {
    result.push(...map.get(key));
  }
  return result;
}

const ans = verticalOrder(one);
console.log(ans);

// verticalOrder(root) {
//   const result = [];
//   if (!root) {
//     return result;
//   }

//   const map = new Map();
//   const queue = [{ node: root, hd: 0 }];

//   while (queue.length > 0) {
//     const { node, hd } = queue.shift();

//     if (!map.has(hd)) {
//       map.set(hd, []);
//     }
//     map.get(hd).push(node.data);

//     if (node.left) {
//       queue.push({ node: node.left, hd: hd - 1 });
//     }
//     if (node.right) {
//       queue.push({ node: node.right, hd: hd + 1 });
//     }
//   }

//   const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);

//   for (const key of sortedKeys) {
//     result.push(...map.get(key));
//   }

//   return result;
// }
