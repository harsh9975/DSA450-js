const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add(2);
list.add(1);
list.add(3);
list.add(5);
list.add(6);
list.add(4);
list.add(7);
list.print();
deleteMiddleNode(list.head);
list.print();

function deleteMiddleNode(head) {
  if (head == null || head.next == null) {
    return null;
  }

  let fast = head;
  let slow = fast;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }

  prev.next = prev.next.next;
}
