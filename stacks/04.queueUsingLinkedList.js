class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enque(value) {
    const newNode = new QueueNode(value);
    if (this.size == 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  deque() {
    if (this.size == 0) {
      return null;
    }
    if (this.size == 1) {
      this.back = null;
    }
    const node = this.front;
    this.front = this.front.next;
    this.size--;
    return node.value;
  }
}

const queue = new Queue();
queue.enque("a");
queue.enque("b");
queue.enque("c");
queue.enque("d");
console.log(queue);
console.log(queue.front.value);
console.log(queue.back.value);
console.log(queue.deque());
queue.deque();
queue.deque();
queue.deque();
console.log(queue);
