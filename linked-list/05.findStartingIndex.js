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
console.log("ans: ", detectCycleOptimal(list.head));
function detectCycleNaive(head) {
  let set = new Set();
  while (head !== null) {
    if (set.has(head.val)) return head.val;
    set.add(head.val);
    head = head.next;
  }
  return null;
}

function detectCycleOptimal(head) {
  let fast = head;
  let slow = head;
  let entry = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      while (slow != entry) {
        slow = slow.next;
        entry = entry.next;
      }
      return slow.val;
    }
  }
  return null;
}
