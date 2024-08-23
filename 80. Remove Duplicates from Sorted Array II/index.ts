// my intuiton says to create an object keep track of seen values.

function removeDuplicates(nums: number[]): number {
    const tracker = {};
    
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(tracker[num] >= 2){
           nums.splice(i, 1);
           i--;
        }

        else if(tracker[num]){
           tracker[num] = tracker[num] + 1;
        } else{
            tracker[num] = 1;
        }
           
    }
    
        
    return nums.length;
};