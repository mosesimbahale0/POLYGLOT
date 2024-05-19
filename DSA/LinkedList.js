class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert an element at the beginning of the linked list
    insertFirst(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    // Append an element to the end of the linked list
    insertLast(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Insert an element at a specific position
    insertAt(index, data) {
      if (index < 0 || index > this.size) {
        throw new Error("Invalid index");
      }
      if (index === 0) {
        this.insertFirst(data);
      } else {
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;
        while (current && count < index - 1) {
          current = current.next;
          count++;
        }
        if (current) {
          newNode.next = current.next;
          current.next = newNode;
        }
        this.size++;
      }
    }
  
    // Remove the first element from the linked list
    removeFirst() {
      if (this.head === null) {
        throw new Error("List is empty");
      }
      const removedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removedNode.data;
    }
  
    // Remove the last element from the linked list
    removeLast() {
      if (this.head === null) {
        throw new Error("List is empty");
      }
      if (this.size === 1) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next && current.next.next) {
          current = current.next;
        }
        current.next = null;
      }
      this.size--;
    }
  
    // Remove an element at a specific position
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        throw new Error("Invalid index");
      }
      if (index === 0) {
        return this.removeFirst();
      } else {
        let current = this.head;
        let count = 0;
        while (current && count < index - 1) {
          current = current.next;
          count++;
        }
        if (current && current.next) {
          const removedNode = current.next;
          current.next = removedNode.next;
          this.size--;
          return removedNode.data;
        }
        throw new Error("Node not found");
      }
    }
  
    // Check if the linked list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the linked list
    getSize() {
      return this.size;
    }
  
    // Print the contents of the linked list
    printListData() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.data + " -> ";
        current = current.next;
      }
      console.log(output + "null");
    }
  }
  
  // Usage example
  const myLinkedList = new LinkedList();
  myLinkedList.insertFirst(10);
  myLinkedList.insertLast(20);
  myLinkedList.insertAt(1, 15);
  myLinkedList.printListData(); // Output: 10 -> 15 -> 20 -> null
  console.log(myLinkedList.removeFirst()); // Output: 10
  myLinkedList.printListData(); // Output: 15 -> 20 -> null
  