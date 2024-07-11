function lengthOfLastWord(s: string): number {
    
    const lastword = s.split(" ").filter((s) => s.length != 0);

    return lastword[lastword.length -1].length;
};