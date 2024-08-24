/* 
We need to use sliding window for this problem.

Every problem that usually contains "subarray, substring" and a sequence to keep track is usually sliding window.


*/
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
 
    let l = 0;
    let maxLength = 0;
 
    for(let r = 0; r < s.length; r++){
      while(set.has(s[r])){
         set.delete(s[l]);
         l++;
      }
 
      set.add(s[r]);
      maxLength = Math.max(maxLength, r - l + 1);
    }
 
    return maxLength;
 };