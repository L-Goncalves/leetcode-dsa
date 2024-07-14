function searchMatrix(matrix: number[][], target: number): boolean {
    // Convert to 1D, this is awful i know I plan on going back to this and doing in another way, just wanted to practice binary search
    let flatMatrix = matrix.flat(1);
    let start = 0;
    let end = flatMatrix.length - 1;
    let middleIndex = Math.floor((start + end) / 2);
   

    while(flatMatrix[middleIndex] !== target && middleIndex != end){
        if(flatMatrix[middleIndex] > target){
            end = middleIndex - 1;
        }
        if(flatMatrix[middleIndex] < target){
            start = middleIndex + 1;
        }
        middleIndex = Math.floor((start + end) / 2);

     
    }
   
    if(flatMatrix[middleIndex] != target){
        return false
    }
    return true
};

