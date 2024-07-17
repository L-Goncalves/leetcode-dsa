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

/* Optmized 

    Runtime: 61ms Beats 74.32%
    Memory: 56.61mb Beats 10.42%
*/

function missingNumber2(nums: number[]): number {
    const numSet = new Set(nums);
    let missing = 0;

    while (numSet.has(missing)) {
        missing++;
    }

    return missing;
};