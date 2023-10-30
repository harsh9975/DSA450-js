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
removeNthLastNodeOptimal(list.head, 2);
list.print();

function removeNthLastNodeNaive(head, k) {
  let count = list.size();
  let rmvNode = count - k;
  let curr = head;
  let prev = head;
  let i = 0;
  console.log("rmvNode", rmvNode);
  while (i < rmvNode && curr != null) {
    prev = curr;
    curr = curr.next;
    i++;
  }
  if (i == rmvNode && curr != null) {
    if (prev == null) {
      list.head = curr.next;
    } else {
      prev.next = curr.next;
    }
  }
}

function removeNthLastNodeOptimal(head, k) {
  let start = new LinkedList();
  start.next = head;
  let fast = start;
  let slow = start;

  for (let i = 1; i <= k; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  // return head;
}
