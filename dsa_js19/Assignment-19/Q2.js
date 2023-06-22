//Complexity
//Time Complexity - O(N Log N)
// Space complexity - O(n)

function countSmaller(nums) {
    if(!nums || !nums.length) return [];
    let sorted = [], res = [];
    sorted.push(nums[nums.length-1]), res.push(0);
    for(let i=nums.length-2; i>=0; i--) {
        let pos = binarySearch(sorted, 0, sorted.length-1, nums[i]);
        res.unshift(pos);
        sorted.splice(pos, 0, nums[i]);
    }
    return res;
};

// return the position to insert, which also equals to the count of smaller numbers after num
function binarySearch(arr, start, end, num) {
    if(num <= arr[start]) return start;
    if(num > arr[end]) return end+1;
    const mid = Math.floor((start+end)/2);
    // console.log(arr, start, end, arr[start], arr[end], mid, num);
    if(arr[mid] === num) return mid;
    if(num < arr[mid]) return binarySearch(arr, start, mid, num);
    return binarySearch(arr, mid+1, end, num);
}
//Print
//Example -1
console.log(countSmaller([5,2,6,1]));
//Example -2
console.log(countSmaller([-1]));
//Example - 3
console.log(countSmaller([-1, -1]));