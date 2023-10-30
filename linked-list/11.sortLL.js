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
sortLinkedList(list.head);
list.print();
function sortLinkedList(head) {
  if (head == null || head.next == null) {
    return head;
  }

  let fast = head;
  let slow = head;
  let temp = null;

  while (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null;
  let l1 = sortLinkedList(head);
  let l2 = sortLinkedList(slow);

  return mergeList(l1, l2);
}

function mergeList(head1, head2) {
  let fh = null,
    ft = null;
  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      if (fh == null) {
        fh = head1;
        ft = head1;
        head1 = head1.next;
      } else {
        ft.next = head1;
        ft = ft.next;
        head1 = head1.next;
      }
    } else {
      if (fh == null) {
        fh = head2;
        ft = head2;
        head2 = head2.next;
      } else {
        ft.next = head2;
        ft = ft.next;
        head2 = head2.next;
      }
    }
  }
  if (head1 !== null) {
    ft.next = head1;
  }
  if (head2 !== null) {
    ft.next = head2;
  }
  return fh;
}
