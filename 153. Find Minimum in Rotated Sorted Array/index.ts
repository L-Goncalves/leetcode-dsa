// I learned that Binary search usually don't require a queue at all and it can work if the array was sorted in the first place even if it got rotated
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length -1;
    while(left < right){
       const mid =  Math.floor((left + right) / 2);

       if(nums[mid] > nums[right]){
            left = mid + 1;
       } else{
            right = mid;
       }
    }

    return nums[left];
};