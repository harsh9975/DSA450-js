const LinkedList = require("./01.linked-list");

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.createCircle(2, 5);
list.print();
console.log("ans: ", lengthOfLoop(list.head));

function lengthOfLoopNiave(head) {
  let set = new Set();
  let totalLength = 0;
  let length = 0;
  let entry = head;
  while (head !== null) {
    if (set.has(head)) {
      while (entry != head) {
        entry = entry.next;
        length++;
      }
      return totalLength - length;
    }
    set.add(head);
    totalLength++;
    head = head.next;
  }
  return null;
}

function lengthOfLoop(head) {
  let slow = head;
  let fast = head;
  let length = 0;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      do {
        length++;
        fast = fast.next;
      } while (slow != fast);
      return length;
    }
  }
  return false;
}
