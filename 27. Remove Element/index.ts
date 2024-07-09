
// It's needed to mofidy in-place (original array MUST be Modified.)

// Solution 1: 68ms
function removeElement(nums: number[], val: number): number {
    while(nums.includes(val)){
        let index: number = nums.indexOf(val);
        nums.splice(index, 1)
    }
    
    return nums.length;
};


