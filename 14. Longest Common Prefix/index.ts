/* Beats 87.04% in Memory and 83.82% in Runtime */

function longestCommonPrefix(strs: string[]): string {
    if(strs.length == 0) return "";

    let possiblePrefix = strs[0];
    let n = 1;
    let i = 0;
    while(i < strs.length){
        const word = strs[i];
        
        while(word.substring(0, possiblePrefix.length) != possiblePrefix){
            possiblePrefix = possiblePrefix.substring(0, possiblePrefix.length - 1);
            n = n + 1;
        }
        
     

        i++
    }

    return possiblePrefix;
};