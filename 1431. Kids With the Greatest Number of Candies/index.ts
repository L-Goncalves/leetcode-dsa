// @ts-nocheck
/* 
    Complexity: O(n)
*/
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // candieKid = ith
    // extraCandites = n of candies I have.
    const boolArray = [];
    const highestCandyN = Math.max(...candies);
    for(let i = 0; i < candies.length; i++){
        const candieKid = candies[i];

        if((candieKid + extraCandies) >= highestCandyN){
            boolArray.push(true);
        } else{
            boolArray.push(false);
        }
    }

    return boolArray;
};