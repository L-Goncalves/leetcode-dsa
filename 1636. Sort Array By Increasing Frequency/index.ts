function frequencySort(nums: number[]): number[] {
 
    const map = new Map<number, number>();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }


    nums.sort((a, b) => {
        const freqA = map.get(a) || 0;
        const freqB = map.get(b) || 0;
        
        if (freqA === freqB) {
            // If frequencies are the same we will sort by value in decreasing order
            return b - a;
        }
        
        // Sort by frequency in increasing order
        return freqA - freqB;
    });

    return nums;
}
