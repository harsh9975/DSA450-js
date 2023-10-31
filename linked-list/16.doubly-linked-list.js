class Node {
  constructor(val) {
    this.val = val;
    this.prev = null; // Reference to the previous node
    this.next = null; // Reference to the next node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Reference to the last node
  }

  add(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addFirst(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  remove(val) {
    let current = this.head;
    while (current !== null) {
      if (current.val === val) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();

list.addFirst(0);
list.print();

list.remove(3);
list.print();
