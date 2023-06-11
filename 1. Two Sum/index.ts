function twoSum(nums: number[], target: number): number[] | undefined { // O(N^2)

    for(let i = 0; i<nums.length; i++){
        if(nums[i] + nums[i+1] === target){
            return [i, i+1]
        } 
        else if(nums[i-1] + nums[i+1] === target){
            return [i-1, + nums[i]]
        }

        for(let j = i + 1; j < nums.length; j++){
           if(nums[i] + nums[j] === target){
               return [i, j]
           } 
        }

    }
 
};