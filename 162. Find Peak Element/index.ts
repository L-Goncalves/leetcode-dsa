// O(logN) solution.


// For some reason this doesn't have a high score maybe everyone did this way?

function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;


    while(left < right){
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // If the middle element is greater than the element to its right,
            // making array smaller on the right
            right = mid;
        } else {
            // If the middle element is less than or equal to the element to its right,
            // making array smaller on the left;
            left = mid + 1;
        }
    }

    return left;
};