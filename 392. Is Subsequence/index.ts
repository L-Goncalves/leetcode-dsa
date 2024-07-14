// Beats 51.10% on Runtime and 49.13% on Memory.
function isSubsequence(s: string, t: string): boolean {
    // We want the two pointer solution.
    // But I thought of one possible solution "bruteforcing it" We could .split and sort abd verify if t array exists in s array?
    let p1 = 0;
    let p2 = 0;
  
    while(p2 < t.length){
        if(s[p1] == t[p2]){
           p1++;
        } 
        p2++
    }

    if(p1 == s.length){
        return true
    }

    return false;

};