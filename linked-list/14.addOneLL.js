const { LinkedList, Node } = require("./01.linked-list");

const list = new LinkedList();
list.add(1);
list.add(5);
list.add(2);
list.print();
addOne(list.head);
list.print();

function reverse(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let prev = null;
  let curr = head;
  let next;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

function addOne(head) {
  head = reverse(head);

  let carry = 1;
  let curr = head;
  let prev = null;

  while (curr != null) {
    let sum = carry + curr.val;
    carry = Math.floor(sum / 10);
    curr.val = sum % 10;
    prev = curr;
    curr = curr.next;
  }

  if (carry !== 0) {
    let newNode = new Node(carry);
    if (prev !== null) {
      prev.next = newNode;
    } else {
      head = newNode;
    }
  }

  head = reverse(head);
}
