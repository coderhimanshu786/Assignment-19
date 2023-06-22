//Complexity
//Time Complexity - O(n + m)
// Space complexity - O(1)

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    // Compare elements from both arrays and add the smaller element to the merged array
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add any remaining elements from arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add any remaining elements from arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example -1:
  console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
  
  //Example -2
  console.log(mergeSortedArrays([5, 8, 9], [4, 7, 8]));