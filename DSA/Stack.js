class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an element onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Pop an element from the stack (and return it)
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack (without removing it)
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    getSize() {
      return this.items.length;
    }
  
    // Print the contents of the stack (optional)
    printStack() {
      const elements = this.items.slice(); // Create a copy to avoid modifying original stack
      let output = "Stack: [";
      while (elements.length > 0) {
        output += elements.pop() + (elements.length > 0 ? ", " : "");
      }
      output += "]";
      console.log(output);
    }
  }
  
  // Usage example
  const myStack = new Stack();
  myStack.push(10);
  myStack.push(20);
  console.log(myStack.peek()); // Output: 20 (without removing)
  console.log(myStack.pop()); // Output: 20
  myStack.push(30);
  myStack.printStack(); // Output: Stack: [10, 30]
  