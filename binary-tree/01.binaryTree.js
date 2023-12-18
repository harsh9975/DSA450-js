class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const breadthFirstSearch = (root) => {
  const queue = [root];
  let ans = [];
  while (queue.length > 0) {
    let curr = queue.shift();
    ans.push(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return console.log("bst: ", ans);
};
breadthFirstSearch(a);

// const depthFirstSearch = (root) => {
//   const stack = [root];
//   while (stack.length > 0) {
//     const curr = stack.pop();
//     console.log(curr.value);

//     if (curr.right) {
//       stack.push(curr.right);
//     }
//     if (curr.left) {
//       stack.push(curr.left);
//     }
//   }
// };

const depthFirstSearch = (root, ans) => {
  if (root == null) return;
  // console.log(root.value);
  ans.push(root.value);
  depthFirstSearch(root.left, ans);
  depthFirstSearch(root.right, ans);
};

let ans = [];
depthFirstSearch(a, ans);
console.log("dfs: ", ans);

//preorder traversal
const preorder = (root) => {
  if (root == null) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
};

preorder(a);

//postorder traversal
const postorder = (root) => {
  if (root == null) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
};

postorder(a);

//inorder traversal
const inorder = (root) => {
  if (root == null) return;
  inorder(root.left);
  inorder(root.right);
  console.log(root.value);
};

inorder(a);
