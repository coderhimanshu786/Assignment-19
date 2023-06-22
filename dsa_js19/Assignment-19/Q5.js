//Complexity
//Time Complexity - O(N)
// Space complexity - O(1)

function alternatePositiveNegative(arr) {
    const result = [];
    let posIndex = 0;
    let negIndex = 0;
  
    // Separate positive and negative numbers
    const positives = arr.filter(num => num > 0);
    const negatives = arr.filter(num => num < 0);
  
    // Determine the starting index for positive and negative numbers
    if (positives.length >= negatives.length) {
      posIndex = 0;
      negIndex = 0;
    } else {
      posIndex = 1;
      negIndex = 0;
    }
  
    // Merge positive and negative numbers in an alternatively
    while (posIndex < positives.length && negIndex < negatives.length) {
      result.push(positives[posIndex]);
      result.push(negatives[negIndex]);
      posIndex++;
      negIndex++;
    }
  
    // Append remaining positive or negative numbers
    while (posIndex < positives.length) {
      result.push(positives[posIndex]);
      posIndex++;
    }
  
    while (negIndex < negatives.length) {
      result.push(negatives[negIndex]);
      negIndex++;
    }
  
    return result;
  }
  
  //Print
  //Example -1
  console.log(alternatePositiveNegative([1, -2, 3, -4, 5, -6, 7]));
  
  //Example -2
  console.log(alternatePositiveNegative([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
  