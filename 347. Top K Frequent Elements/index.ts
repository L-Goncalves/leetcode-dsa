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

    console.log(mapValues)
    for (const [key, value] of map.entries()) {
         if (mapValues.find((item) => item === value)) {
            topKs.push(key)
            console.log(key, 'has been added to the array and', value, 'is the highest number')
        } 
        
    
        if(topKs.includes(key)){
            map.delete(key) 
            console.log(key, 'has been removed from the Map')
        }
        if(topKs.length === k){
            return topKs
        }
      }
    return []
};


const data = topKFrequent([5,3,1,1,1,3,73,1], 2)

console.log('response:', data)