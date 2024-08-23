/* 

This is the row ↓ and the second index is the column
         matrix [0][2]

    we will be acessing 0 row and column 2 which means number 5
        0  1  2  3
    0 [[1, 3, 5*, 7],
    1 [10, 11, 16, 20],
    2 [23, 30, 34, 60]]


*/
function searchMatrix(matrix: number[][], target: number): boolean {
    if(matrix.length == 0 || matrix[0].length == 0){
        return false;
    }

    let rows = matrix.length;
    let columns = matrix[0].length;

    let left = 0;
    
    let right = rows * columns - 1;

    

    while (left <= right) {

        // usually happens in binary search
        const mid = Math.floor((left + right) / 2);
        // ???
        const row = Math.floor(mid / columns);
        const column = mid % columns;

        const mid_value = matrix[row][column];
 
       if (mid_value === target) {
            return true;
        } else if (mid_value < target) {
            
            left = mid + 1;
        } else {
            // if larger means we need to shrink the right;
            right = mid - 1;
        }

    }

    return false;

};