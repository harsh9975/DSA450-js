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
list.head = reverseKGroup(list.head, k);
list.print();

function reverseKGroup(head, k) {
  if (head == null || k == 1) {
    return head;
  }
  let dummy = new Node(0);
  dummy.next = head;
  curr = dummy;
  next = dummy;
  prev = dummy;
  let count = 0;
  while (curr.next != null) {
    count++;
    curr = curr.next;
  }

  while (count >= k) {
    curr = prev.next;
    next = curr.next;
    for (let i = 1; i < k; i++) {
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = curr.next;
    }
    prev = curr;
    count -= k;
  }
  return dummy.next;
}
