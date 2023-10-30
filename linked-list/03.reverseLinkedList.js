const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add("a");
list.add("b");
list.add("c");
list.add("d");
list.add("e");
list.add("f");

function reverse() {
  let prev = null;
  let curr = list.head;
  let next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}
// console.log(reverse(list));
console.log(reverseList(list));
function reverseList(node) {
  if (node.head == null || node.head.next !== null) {
    return node.head;
  }

  let newNode = reverseList(node.head.next);
  node.head.next.next = head;
  head.next = null;
  return newNode;
}

list.print();
