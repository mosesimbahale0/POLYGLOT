/**
 * INSERTION SORT
 * 
 * This implementation iterates through the array starting from the second element (index 1). 
 * For each element "urrentValue", it compares it with the elements before it (j index). 
 * If an element before it is larger, it is shifted one position to the right. 
 * This process continues until a smaller element or the beginning of the array is reached. 
 * Finally, the currentValue is inserted at the correct position (index j + 1).
 * 
 * 
 * The time complexity of insertion sort is O(n^2) in the worst case, but it can be more efficient
 * for partially sorted arrays or small datasets. It's a simple and easy-to-understand sorting algorithm. * 
 * 
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j = i - 1;
  
      // Shift elements to the right until the correct position is found
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element at the correct position
      arr[j + 1] = currentValue;
    }
    return arr;
  }
  
  // Usage example
  const unsortedArray = [5, 2, 4, 6, 1, 3];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
  