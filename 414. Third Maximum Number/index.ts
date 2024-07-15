/* O(n) time complexity
  *Memory*: 52.08mb / 57.56%
  *Runtime*: 66ms / 43.90%
*/
function thirdMax(nums: number[]): number {
    // we're gonna pop the first and second max and return third.
    const max = Math.max(...nums);
    if(nums.length < 3) return max;

   // I know the default is very slow.
    const nonDuplicates = [...new Set(nums)].sort((a, b) => a - b);;
     if(nonDuplicates.length < 3) return max;
    // by default we return max
    return nonDuplicates[nonDuplicates.length - 3];

    
};