class Queue {
    constructor() {
      this.items = [];
      this.front = 0; // Index of the front element
      this.rear = 0; // Index of the rear element (one past the last element)
    }
  
    // Add an element to the back of the queue
    enqueue(item) {
      this.items[this.rear] = item;
      this.rear++;
    }
  
    // Remove the element from the front of the queue (and return it)
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      const removedItem = this.items[this.front];
      this.front++;
      // Handle queue becoming empty after dequeue
      if (this.front === this.rear) {
        this.front = 0;
        this.rear = 0;
      }
      return removedItem;
    }
  
    // Peek at the front element of the queue (without removing it)
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[this.front];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === this.rear;
    }
  
    // Get the size of the queue
    getSize() {
      return this.rear - this.front;
    }
  
    // Print the contents of the queue (optional)
    printQueue() {
      const elements = this.items.slice(this.front, this.rear); // Slice to get relevant portion
      let output = "Queue: [";
      while (elements.length > 0) {
        output += elements.shift() + (elements.length > 0 ? ", " : "");
      }
      output += "]";
      console.log(output);
    }
  }
  
  // Usage example
  const myQueue = new Queue();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  console.log(myQueue.peek()); // Output: 10 (without removing)
  console.log(myQueue.dequeue()); // Output: 10
  myQueue.enqueue(30);
  myQueue.printQueue(); // Output: Queue: [20, 30]
  