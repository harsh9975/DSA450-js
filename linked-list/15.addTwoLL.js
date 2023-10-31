const { LinkedList, Node } = require("./01.linked-list");

const list1 = new LinkedList();
list1.add(2);
list1.add(4);
list1.add(3);
list1.print();

const list2 = new LinkedList();
list2.add(5);
list2.add(6);
list2.add(4);
list2.print();

let final = new LinkedList();
addTwoNumbers(list1.head, list2.head, final);
final.print();

function addTwoNumbers(l1, l2, final) {
  let dummy = new Node();
  let temp = dummy;
  let carry = 0;

  while (l1 != null || l2 != null || carry === 1) {
    let sum = carry;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    let node = new Node(sum % 10);
    temp.next = node;
    temp = temp.next;
  }

  final.head = dummy.next; // Update the final linked list's head
}
