//Complexity
//Time Complexity - O(N)
// Space complexity - O(1)

var moveZeroes = (nums) => {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[j++] = nums[i];
      }
    }
    for (; j < nums.length; j++) {
      nums[j] = 0;
    }
    return nums;
  };
  //To Print
  //Example -1
  console.log(moveZeroes([1, 2, 0, 4, 3, 0, 5, 0]));
  //Example -2
  console.log(moveZeroes([1, 2, 0, 0, 0, 3, 6]));