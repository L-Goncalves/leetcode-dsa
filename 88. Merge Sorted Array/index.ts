/**
 Do not return anything, modify nums1 in-place instead.
 */

 // Solution 1: 75ms
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    for(let i = 0; i <= m; i++){
            if((nums1.length > m)  || m == 0){
                nums1.pop();
            }
    }
    for(let i = 0; i < n; i++){
            if(!(nums2.length > n) || n != 0){
                    nums1.push(nums2[i])
            }
            else{
                nums2.pop();
            }
    }
     
     nums1.sort((n1, n2) => n1 - n2)

};

/* Solution 2: < 70ms
 1. We're gonna go backwards to fix this.
 2. Since this is typescript we can place in a out of range index.
 3. We will verify which array has highest number and place it in place.
*/
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    // Merged array last index;
    let lastIndex =  m + n - 1;
   
    while (m > 0 && n > 0) {
        // Is nums1 pos more than nums2 pos?
        if(nums1[m - 1] > nums2[n - 1]){
            nums1[lastIndex] = nums1[m-1];
            // Going back nums1!
            m = m -1;
        } else{
          // Is nums1 pos lower OR EQUAL to nums2 pos?
           nums1[lastIndex] = nums2[n-1];
           n = n - 1;
        }
      
     
        lastIndex = lastIndex - 1;
   }

    // Verification for second array.
    while (n > 0) {
        nums1[lastIndex] = nums2[n - 1];
        n = n -1; 
        lastIndex = lastIndex - 1; // Move the merged array back
    }

};