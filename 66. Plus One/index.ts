/*
    Time: 27:16
    Runtime: 59ms / 48.92%
    Memory: 51.13MB / 74.05%
*/

function plusOne(digits: number[]): number[] {
    // Large integer as number[] where each i is the i th number.
    // digits are ordered from most significant to least significant in left-to-right order
    // Increment the large integer by one and return the resulting array of digits.
 
     // What we need to do?
     // Maybe join the entire array, verify number and sum + 1;
     // Using parseInt won't work for very large number because it loses data.
     let nString = "";
     // Convert to string
     for(let i = 0; i < digits.length; i++){
         nString = nString + digits[i];
     }
     // do the sum
     nString = (BigInt(nString) + 1n).toString();
 
     // put at the index
     for(let j = 0; j < nString.length; j++){
         digits[j] = parseInt(nString[j]);
     }
     
     return digits;
 };