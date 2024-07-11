
// Beats 30%
function reverseWords(s: string): string {
    const str = s.split(" ").filter((s) =>  s.length != 0).reverse().join(" ");

    return str;
};