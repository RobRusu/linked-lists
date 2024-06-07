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
    //if head is empty return 0
    if (this.head === null) {
      return "0 nodes";
    } else {
      //otherwise return total number of nodes
      let head = this.head;
      let nodes = 1;
      while (head.nextNode !== null) {
        head = head.nextNode;
        nodes++;
      }
      return `${nodes} nodes`;
    }
  }

  headNode() {
    //if head is empty return 0
    if (this.head === null) {
      return 0;
    } else {
      //otherwise return head node
      return this.head;
    }
  }

  tailNode() {
    //if head is empty return 0
    if (this.head === null) {
      return 0;
    } else {
      //otherwise return last node
      let tail = this.head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
      return tail;
    }
  }

  at(index) {
    //if head is empty or input is invalid return message
    if (this.head === null || index <= 0 || !index) {
      return "List is empty";
    } else {
      //otherwise return node at index
      let indexNode = this.head;
      let nodes = 0;
      while (indexNode.nextNode !== null) {
        nodes++;
        if (nodes == index) {
          return indexNode;
        }
        indexNode = indexNode.nextNode;
      }
      // return last node
      if (index <= nodes + 1) return indexNode;
      if (index > nodes) return "Out of range";
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
list.append(255);
list.append(3000);

console.log(list.head);
console.log(list.at(3));
