//Complexity
//Time Complexity - O(N Log N)
// Space complexity - O(n)

const sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  let midIdx = Math.floor(nums.length / 2);
  let leftArr = sortArray(nums.slice(0, midIdx));
  let rightArr = sortArray(nums.slice(midIdx));

  return mergeArr(leftArr, rightArr);
};

const mergeArr = function (arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};
//Print
//Example - 1
console.log(sortArray([5, 2, 3, 1]));
//Example - 2
console.log(sortArray([5, 1, 1, 2, 0, 0]));
