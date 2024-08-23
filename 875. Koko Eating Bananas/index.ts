/* 
Note: always remember to write down the problem before attempting to solve it.

First case:

[3, 6, 7, 11]. Koko has 8 hours to eat them all

The first case gives us a base answer to our problem.

We can define k for our base case 

If we do the following:

k=1 / it will take entire array to eat all bananas 27 hours.
k=2 / it will take entire array / 2 to eat all bananas 13.5 hours.
k=3 / it will take [1, 2, 2, 4] (9) hours.
k=4 / is possibly the answer 
*/

function minEatingSpeed(piles: number[], h: number): number {

    let left = 1;
    let right = Math.max(...piles); 

    while(left <= right){
        const middle = Math.floor((left + right) / 2);

        /* if can eat we need to try a lower value, to try a lower value in binary search we usually just make right
         pointer lower */
        if(canEat(piles, middle, h)){
            right = middle - 1;
        } else{
            left = middle + 1;
        }

      
    }


   return left;
};

function canEat(piles: number[], kGuess: number, hour: number): boolean {
    let totalHours = 0;

    for (let pile of piles) {
        // Calculate hours needed for the current pile
        totalHours += Math.ceil(pile / kGuess);
    }

    return totalHours <= hour;
}