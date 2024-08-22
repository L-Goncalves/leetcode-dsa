// @ts-nocheck

function containsDuplicate(nums: number[]): boolean {
    const seenValues = new Set();


    for(let i = 0; i < nums.length; i++){    
        if(seenValues.has(nums[i])){
               return true;
        }
        else{
            seenValues.add(nums[i])
        }
    }
    return false;
};