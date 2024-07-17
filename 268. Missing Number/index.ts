/* Worst possible solution 
   Memory: 52.2MB beats 61.16%
   Runtime: Beats 6.74% | 273ms


   This is very slow needs to be optmized.
*/
function missingNumber(nums: number[]): number {
    let missing = 0;

    while(nums.includes(missing)){
        missing++

    }

    return missing;
};