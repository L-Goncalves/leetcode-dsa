function topKFrequent(nums: number[], k: number): number[] {

    let map = new Map();
    let topKs: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }
        else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }

    let mapValues =  [...map.values()].sort((a, b) => b - a).slice(0, k)

    for (const [key, value] of map.entries()) {
         if (mapValues.includes(value)) {
            topKs.push(key)
        } 
        if(topKs.length === k){
            return topKs
        }
      }
   
      throw new Error("Couldn't solve")
};