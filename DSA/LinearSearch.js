function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return index if found
      }
    }
    return -1; // Return -1 if not found
  }
  
  // Usage example
  const numbers = [5, 2, 8, 1, 9];
  const target = 8;
  const index = linearSearch(numbers, target);
  
  if (index !== -1) {
    console.log("Target", target, "found at index", index);
  } else {
    console.log("Target", target, "not found in the array");
  }
  