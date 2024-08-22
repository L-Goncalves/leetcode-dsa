// O(n) Solution
function kthFactor(n: number, k: number): number {
    const listFactors: number[] = [];

    for(let i = 0; i <= n; i++){
        if(n % i == 0){
            listFactors.push(i);
        }
    }

    return listFactors[k-1] || -1;
};
