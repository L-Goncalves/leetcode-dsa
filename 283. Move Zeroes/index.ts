//@ts-nocheck

/**
 Do not return anything, modify nums in-place instead.
 */

 /* Notes: 
  
Bruteforcing could be sorting the array with the native language sorting and then shifting from the array and pushing at the end?

But sorting gives me a new array and we need to do it in-place.

Creating a new function called swapPos seems like a good idea.

In this solution we're basically moving all the non-zeros to the start by that we make the zeros go to the right 
(end of the array)
 */
function moveZeroes(nums: number[]): void {
    let start = 0;


    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            swapPos(nums, i, start)
            start++;
        }

    }

    
};

function swapPos(nums, i, start){
        const temp = nums[start];
        nums[start] = nums[i];
        nums[i] = temp;
}
