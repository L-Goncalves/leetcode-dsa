//@ts-nocheck
function canShip(weights: number[], days: number, capacity: number): boolean {
    let currentLoad = 0;
    let requiredDays = 1;

    for (let weight of weights) {
        // If current weight + weight is higher than cap
        if (currentLoad + weight > capacity) {
            // we need more days
            requiredDays++;
            currentLoad = weight;
            if (requiredDays > days) {
                // If the requiredDays is more than the maximum days we can't ship
                return false;
            }
        } else {
            currentLoad += weight;
        }
    }

    return true;
}

function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, curr) => acc + curr, 0);


     while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // We need a helper function to define if we can ship the weights with mid capacity
        if (canShip(weights, days, mid)) {
            // if we can ship then we decrease the high value (right)
            right = mid;  
        } else {
            // otherwise we increase the lower value.
            left = mid + 1;  // Increase the capacity
        }
    }

    return left;
}
  
 
