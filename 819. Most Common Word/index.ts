// @ts-nocheck

/* 
BEATS: 67.35% in Runtime
BEATS: 32.65% in Memory

Time Complexity: O(N)
*/

function mostCommonWord(paragraph: string, banned: string[]): string {
    const map = new Map();
    
    const words = paragraph.toLowerCase()
    .replace(/[^\w\s,]/g, "")
    .split(",")
    .flatMap(part => part.trim().split(/\s+/));

    let highestKey = null;
    // We set a pointer to be updated later after our map is being set.
    let highestValue = -Infinity;
    // O(n)
    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();
        if (!banned.includes(word)) {
            if (map[word]) {
                map[word]++;
            }
            else {
                map[word] = 1;
            }
        }


    }
    // We update the key by going through the map, if value is greater than highestValue it becomes the new value.
    for (const [key, value] of Object.entries(map)) {
        if (value > highestValue) {
            highestValue = value;
            highestKey = key;
        }
    }

    return highestKey;
};