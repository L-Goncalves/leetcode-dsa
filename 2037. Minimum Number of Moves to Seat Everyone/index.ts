// Runtime: 97.78%
// Memory: 35.81%
// This is a O(nlogn) Solution because we need to sort the arrays, if we didn't I guess it would become a O(n) solution
function minMovesToSeat(seats: number[], students: number[]): number {
    let moves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
};