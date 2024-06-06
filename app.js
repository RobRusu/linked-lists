#!/usr/bin/env node

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      //if head is empty add node
      this.head = new Node(value);
    } else {
      //otherwise add value to the end of list
      let head = this.head;
      while (head.nextNode !== null) {
        head = head.nextNode;
      }
      head.nextNode = new Node(value);
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

const list = new LinkedList();
list.append(3);
list.append(5);
list.append(20);

console.log(list.head);
