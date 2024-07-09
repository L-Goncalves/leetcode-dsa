// Solution: 113ms
// Needs IN-PLACE, Can't create new arrays, only modify current one.
function removeDuplicates(nums: number[]): number {
    // It's like using nums = [...Set(nums)] but we can't so we need to figure out another way.
    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        let next = nums[i+1];

        if(current == next){
            nums.splice(i, 1)
              // We need to decrement because splice moves the array.
            i--
        }
      
    }

    return nums.length
};