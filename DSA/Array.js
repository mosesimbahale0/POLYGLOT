class MyArray {
    constructor(initialCapacity = 10) {
      this.capacity = initialCapacity;
      this.length = 0;
      this.data = new Array(initialCapacity);
    }
  
    // Resize the internal array if needed
    resize(newCapacity) {
      this.data = this.data.slice(0, newCapacity);
      this.capacity = newCapacity;
    }
  
    // Insert an element at a specific index
    insert(index, item) {
      // Check for valid index and resize if needed
      if (index < 0 || index > this.length) {
        throw new Error("Invalid index");
      }
      if (this.capacity === this.length) {
        this.resize(this.capacity * 2);
      }
  
      // Shift elements to the right to make space
      for (let i = this.length - 1; i >= index; i--) {
        this.data[i + 1] = this.data[i];
      }
  
      // Insert the new element at the specified index
      this.data[index] = item;
      this.length++;
    }
  
    // Append an element to the end of the array
    push(item) {
      this.insert(this.length, item);
    }
  
    // Remove the last element from the array
    pop() {
      if (this.length === 0) {
        throw new Error("Array is empty");
      }
      const removedItem = this.data[this.length - 1];
      this.length--;
      return removedItem;
    }
  
    // Access an element by its index
    get(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
      }
      return this.data[index];
    }
  
    // Set the value of an element at a specific index
    set(index, value) {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
      }
      this.data[index] = value;
    }
  }
  
  // Usage example
  const myArray = new MyArray();
  myArray.push(10);
  myArray.push(20);
  myArray.insert(1, 15);
  console.log(myArray.get(0)); // Output: 10
  console.log(myArray.get(2)); // Output: 20
  myArray.set(1, 30);
  console.log(myArray.pop()); // Output: 20
  
  