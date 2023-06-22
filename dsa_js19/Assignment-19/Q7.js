//Complexity
//Time Complexity - O(N)
// Space complexity - O(1)

const intersection = function (nums1, nums2) {
    let empty = [];
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          empty.push(nums1[i]);
        }
      }
    }
    return [...new Set(empty)];
  };
  //Print
//Example -1
console.log(intersection( [1,2,2,1], [2, 2]));
//Example -2 
console.log(intersection([4,9,5], [9,4,9,8,4]));