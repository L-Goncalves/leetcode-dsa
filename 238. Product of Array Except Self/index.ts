// @ts-nocheck

function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let answers = Array.from(nums).fill(1);

    let left = 1;
    for(let i = 0; i < n; i++){
        answers[i] = left;
    
        left = left * nums[i]
    }

    let right = 1;

    for(n > 0; n--;){
        answers[n] = answers[n] * right;
        right = right * nums[n];
    }

    return answers;


    return answers;
};