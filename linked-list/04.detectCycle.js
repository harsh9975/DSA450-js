const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.createCircle(1, 5);
list.print();
console.log("cycle detected", detectCycleOptimal(list.head));
// console.log("list.head: ", list.head);
function detectCycleNaive(head) {
  let set = new Set();
  while (head !== null) {
    if (set.has(head.val)) return true;
    set.add(head.val);
    head = head.next;
  }
  return false;
}

function detectCycleOptimal(head) {
  if (head == null || head.next == null) return null;
  let fast = head;
  let slow = head;
  while (fast.next != null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}
