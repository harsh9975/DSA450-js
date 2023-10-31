const { LinkedList, Node } = require("./01.linked-list");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.print();
let k = 2;
list.head = rotateKLL(list.head, k);
list.print();

function rotateKLL(head, k) {
  if (head == null || head.next == null || k == 0) {
    return head;
  }
  let curr = head;
  let len = 1;
  while (curr.next != null) {
    len++;
    curr = curr.next;
  }

  curr.next = head;
  k = len - (k % len) - 1; // Corrected line
  curr = head; // Reset curr to the beginning
  while (k > 0) {
    curr = curr.next;
    k--;
  }

  head = curr.next;
  curr.next = null;
  return head;
}
