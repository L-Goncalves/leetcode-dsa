/**
 Do not return anything, modify nums in-place instead.
 */
// Beats 25% in runtime and 71.05% in Memory
// Not really good but simple solution
 function rotate(nums: number[], k: number): void {
    // Rotate to the Right ->
    // we need to loop and remove the last k indexes and shift at first indexes.

    // while we still need to do it.
    while(k > 0){
        const item = nums.pop() as number;
        nums.unshift(item);
        k--;
    }

};