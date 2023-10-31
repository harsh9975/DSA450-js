class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  addFirst(val) {
    let curr = new Node(val);
    curr.next = this.head;
    this.head = curr;
    return this.head;
  }

  addLast(val) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  contains(val) {
    let curr = this.head;
    while (curr.next !== null) {
      if (curr.val == val) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  get(index) {
    if (index < 0) {
      throw new Error("Index out of bounds");
    }
    let curr = this.head;
    let i = 0;
    while (i < index && curr != null) {
      curr = curr.next;
      i++;
    }
    if (i == index && curr !== null) {
      return curr.val;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  peek() {
    if (this.head === null) {
      throw new Error("List is empty");
    }
    return this.head.val;
  }

  poll() {
    if (this.head === null) {
      throw new Error("List is empty");
    }
    let value = this.head.val;
    this.head = this.head.next;
    return value;
  }

  pop() {
    return this.poll();
  }

  push(element) {
    this.addFirst(element);
  }

  remove(index) {
    if (index < 0) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        return;
      } else {
        throw new Error("Index out of bounds");
      }
    }
    let curr = this.head;
    let prev = null;
    let i = 0;

    while (i < index && curr !== null) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    if (i === index && curr !== null) {
      prev.next = curr.next;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  createCircle(startIndex, cycleIndex) {
    if (this.head === null) {
      throw new Error("Cannot create a cycle in an empty list.");
    }
    let currIndex = 0;
    let currNode = this.head;
    let startNode = null;
    let endNode = null;
    while (currNode != null) {
      if (currIndex == startIndex) {
        startNode = currNode;
      }
      if (currIndex == cycleIndex) {
        endNode = currNode;
      }

      if (currIndex == startIndex - 1) {
        startNode = currNode;
      }
      currNode = currNode.next;
      currIndex++;
    }
    if (startNode === null || endNode === null) {
      throw new Error("Invalid cycle position or start index.");
    }

    endNode.next = startNode;
  }

  print(head) {
    let curr = head ? head : this.head;
    let visitedNodes = new Set();
    let str = "";

    while (curr !== null) {
      if (visitedNodes.has(curr)) {
        console.log("Cycle detected. Stopping print.");
        break;
      }

      visitedNodes.add(curr);
      str += curr.val + "->";
      curr = curr.next;
    }

    if (curr === null) {
      console.log(str + "null (end of list)");
    }
  }
}
module.exports = { LinkedList, Node };
