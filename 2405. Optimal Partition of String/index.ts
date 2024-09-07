function partitionString(s: string): number {
    let set = new Set();
    let result = 1;


    for(let i = 0; i < s.length; i++){
        const str  = s[i];

        if(set.has(str)){
             result += 1;
             set = new Set();
        } 
        set.add(str);
    }

    return result;
};