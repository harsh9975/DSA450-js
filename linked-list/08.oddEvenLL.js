const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add(2);
list.add(1);
list.add(3);
list.add(5);
list.add(6);
list.add(4);
list.add(7);

console.log("Original List:");
list.print();
console.log(oddEvenNaive(list.head));

function oddEvenNaive(head) {
  if (head == null) return;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;

    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
