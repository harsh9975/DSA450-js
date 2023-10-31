const { LinkedList, Node } = require("./01.linked-list");

const list = new LinkedList();
list.add(2);
list.add(1);
list.add(0);
list.add(1);
list.add(0);
list.add(2);
list.add(1);
list.print();
list.head = sortOptimal(list.head);
list.print();

function sortNaive(head) {
  let zeroCount = 0;
  let twoCount = 0;
  let oneCount = 0;

  let curr = head;
  while (curr != null) {
    if (curr.val == 0) {
      zeroCount++;
    } else if (curr.val == 1) {
      oneCount++;
    } else if (curr.val == 2) {
      twoCount++;
    }

    curr = curr.next;
  }

  curr = head;
  while (curr != null) {
    if (zeroCount != 0) {
      curr.val = 0;
      zeroCount--;
    } else if (oneCount != 0) {
      curr.val = 1;
      oneCount--;
    } else if (twoCount != 0) {
      curr.val = 2;
      twoCount--;
    }
    curr = curr.next;
  }
}

function sortOptimal(head) {
  let zeroHead = new Node(-1);
  let zeroTail = zeroHead; // Initialize zeroTail
  let oneHead = new Node(-1);
  let oneTail = oneHead; // Initialize oneTail
  let twoHead = new Node(-1);
  let twoTail = twoHead; // Initialize twoTail
  let curr = head;

  while (curr != null) {
    let val = curr.val;
    const newNode = new Node(val); // Create a new Node

    if (val == 0) {
      zeroTail.next = newNode;
      zeroTail = newNode;
    } else if (val == 1) {
      oneTail.next = newNode;
      oneTail = newNode;
    } else if (val == 2) {
      twoTail.next = newNode;
      twoTail = newNode;
    }
    curr = curr.next;
  }

  if (oneHead.next != null) {
    zeroTail.next = oneHead.next;
  } else {
    zeroTail.next = twoHead.next;
  }

  oneTail.next = twoHead.next;
  twoTail.next = null;
  return zeroHead.next; // Return the new head
}
