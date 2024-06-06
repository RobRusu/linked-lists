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

  size() {
    if (this.head === null) {
      return "0 nodes";
    } else {
      let head = this.head;
      let nodes = 1;
      while (head.nextNode !== null) {
        head = head.nextNode;
        nodes++;
      }
      return `${nodes} nodes`;
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
list.append(6);
list.append(29);
list.append(55);
list.append(90);
list.prepend(15);

console.log(list);
console.log(list.size());
