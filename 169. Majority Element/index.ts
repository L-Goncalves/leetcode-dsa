// Beats 70%.
function majorityElement(nums: number[]): number {
    // Need to count how many times N appears.
    const obj = {};
    let majority = 0;
    nums.forEach((n, i) => {
        if(!obj[n]){
            obj[n] = 0;
        }
        obj[n] = obj[n] + 1;

        if(i == nums.length-1){
            const values = Object.values(obj) as any;
            const keys = Object.keys(obj) as any;
            const maxValue = Math.max(...values);
            let index = values.indexOf(maxValue);

            majority = keys[index];
        }
    })

    
    return majority;

};