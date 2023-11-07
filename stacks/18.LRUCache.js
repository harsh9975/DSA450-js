class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Use a Map for key-value storage
    this.order = new DoublyLinkedList(); // Doubly linked list for maintaining order
  }

  get(key) {
    if (this.cache.has(key)) {
      // Move the accessed item to the front
      const node = this.cache.get(key);
      this.order.moveToFront(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update the existing key
      const node = this.cache.get(key);
      node.value = value;
      this.order.moveToFront(node);
    } else {
      // Add a new key
      if (this.cache.size === this.capacity) {
        // Remove the least recently used item
        const removedKey = this.order.removeFromEnd();
        this.cache.delete(removedKey);
      }
      const newNode = new DoublyLinkedListNode(key, value);
      this.cache.set(key, newNode);
      this.order.addToFront(newNode);
    }
  }
}

class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedListNode(null, null);
    this.tail = new DoublyLinkedListNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToFront(node) {
    const next = this.head.next;
    node.prev = this.head;
    node.next = next;
    this.head.next = node;
    next.prev = node;
  }

  removeFromEnd() {
    if (this.tail.prev === this.head) return null;
    const lastNode = this.tail.prev;
    this.removeNode(lastNode);
    return lastNode.key;
  }

  moveToFront(node) {
    this.removeNode(node);
    this.addToFront(node);
  }

  removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1)); // Output: 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2
console.log(lRUCache.get(2)); // Output: -1
lRUCache.put(4, 4); // LRU key was 1, evicts key 1
console.log(lRUCache.get(1)); // Output: -1
console.log(lRUCache.get(3)); // Output: 3
console.log(lRUCache.get(4)); // Output: 4
