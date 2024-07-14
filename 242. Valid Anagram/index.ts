/* O(n) Solution.
**Beats 86.89% in Runtime**
** Beats 79.46% in  Memory**

I've previously done this problem before but it was a N log N solution due to split and sorting.

*/

function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;
    let obj = {};


    for(let i = 0; i < s.length; i++){
        const char = s[i];
        obj[char] ? obj[char] = obj[char] + 1 : obj[char] = 1;
    }

    for(let j = 0; j < t.length; j++){
        const char = t[j];

        if(!obj[char]){
            return false;
        }

        else{
            obj[char] = obj[char] - 1;
        }
    }

    return true;
};