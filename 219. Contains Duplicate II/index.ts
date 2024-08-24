function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // Every sliding window has a set i guess.
    const set = new Set();

    for(let i = 0; i < nums.length; i++){
   
        if (set.has(nums[i])) {
            // if we have a duplicate we return
            return true;
        }

        set.add(nums[i]);

        // Maintain the window of size k
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};