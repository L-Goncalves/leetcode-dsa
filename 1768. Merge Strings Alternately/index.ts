/* This doesn't use two pointer but still allows me to send it so idk, maybe i go back on this with two pointer solution 

Beats: 99.73% ??
*/
function mergeAlternately(word1: string, word2: string): string {
    const isWord1Longer = word1.length > word2.length;
    const isWord2Longer = word2.length > word1.length;

    let str = isWord1Longer ? word1 : word2;
  
    let buildedStr = '';
    for(let i = 0; i < str.length; i++){
        
        if(word1[i] != undefined){
            buildedStr += word1[i];
        }
   
        if(word2[i] != undefined){
            buildedStr += word2[i];
        }

    }

    return buildedStr;
};