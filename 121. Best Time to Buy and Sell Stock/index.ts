// Beats 64.80% On Runtime
// Beats 40.62% On Memory
function maxProfit(prices: number[]): number {
 
    if(prices.length == 0) return 0;
    
    // This is to ensure that first iteration will be replaced.
    let minPrice: number = Infinity;
    let maxProfitN: number = 0;

    // Loop
    for(let i = 0; i < prices.length; i++){
        const price = prices[i];
        const currentProfit = price - minPrice;
        if(price < minPrice){
            minPrice = prices[i];
        }
        else if(currentProfit > maxProfitN){
            maxProfitN = price - minPrice;
        }
    }

    return maxProfitN;
};