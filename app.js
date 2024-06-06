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

  prepend(value) {
    if (this.head === null) {
      //if head is empty add node
      this.head = new Node(value);
    } else {
      //otherwise add value to the start of the list and make it new head
      let newHead = new Node(value);
      newHead.nextNode = this.head;
      this.head = newHead;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

const list = new LinkedList();

list.append(2);
list.prepend(15);
list.prepend(20);
list.append(5);

console.log(list);
