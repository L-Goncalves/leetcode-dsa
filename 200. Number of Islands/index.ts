
// @ts-nocheck
/*

I'm learning graphs so don't judge me
*/

function numIslands(grid: string[][]): number {
    let nOfIslands = 0;

    // Traverse each cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // If the cell is land ('1'), it's part of a new island
            if (grid[row][col] === '1') {
                nOfIslands++; // Increment the island count
                bfs(grid, row, col); // Use BFS to mark the entire island
            }
        }
    }

    return nOfIslands;
}

// BFS to explore all cells in the island
function bfs(grid: string[][], startRow: number, startCol: number) {
    let queue = [[startRow, startCol]];
    // Mark the starting cell as visited
    grid[startRow][startCol] = '0';

    const directions = [
        [1, 0], // DOWN
        [-1, 0], // UP
        [0, 1], // RIGHT
        [0, -1] // LEFT
    ];

    while (queue.length > 0) {
        const [row, col] = queue.shift(); // Get the next cell to process

        // Check all 4 possible directions
        for (const [rowOffset, colOffset] of directions) {
            const newRow = row + rowOffset; // New row index
            const newCol = col + colOffset; // New column index

            // Check if the new position is within bounds and is land ('1')
            if (
                newRow >= 0 &&
                newRow < grid.length &&
                newCol >= 0 &&
                newCol < grid[0].length &&
                grid[newRow][newCol] === '1'
            ) {
                queue.push([newRow, newCol]); // Add the new cell to the queue
                grid[newRow][newCol] = '0'; // Mark it as visited
            }
        }
    }
}
