// O(nLogn)
function searchInsert(nums: number[], target: number): number {
    
    
    nums.push(target);

    return nums.sort((a, b) => a - b).indexOf(target);
};