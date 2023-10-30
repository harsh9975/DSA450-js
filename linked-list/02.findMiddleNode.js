const LinkedList = require("./01.linked-list");

function middleNode(list) {
  if (list.head === null) {
    return null; // Empty list, no middle node
  }

  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const list = new LinkedList();
list.add("a");
list.add("b");
list.add("c");
list.add("d");
list.add("e");
list.add("f");
list.createCircle(1, 2);
list.print();
const middle = middleNode(list);
if (middle !== null) {
  console.log("Middle node:", middle.val);
} else {
  console.log("The list is empty.");
}
