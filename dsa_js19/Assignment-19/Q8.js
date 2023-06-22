//Complexity
//Time Complexity - O(N)
// Space complexity - O(1)

const intersect = function(nums1, nums2) {
    let cache = {};
    let result=[];
    for (let num of nums2){
        if (!cache[num])cache[num]=1;
        else cache[num]++;
    }
    for (let num of nums1){
        if (cache[num]){
            result.push(num);
            cache[num]--;
        }
    }
    
    return result ;
};
//To Print
//Example -1
console.log(intersect([1,2,2,1], [2,2]));
//Example -2
console.log(intersect([4,9,5], [9,4,9,8,4]));