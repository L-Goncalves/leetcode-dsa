function romanToInt(s: string): number {

    let n = 0;

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        const nextLetter = s[i + 1];
        const n2 = letter + nextLetter;

        // First we've declared the info from the question into code.
        const romanIntengers = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }

        // Then we turn Object into array and verify if n2 (letter + next letter is IN that array.)
        // If it is we increment.
        if (Object.keys(romanIntengers).includes(n2)) {
            n = n + romanIntengers[n2];
            i++;
        }

        if (Object.keys(romanIntengers).includes(letter) && !Object.keys(romanIntengers).includes(n2)) {
            n = n + romanIntengers[letter];
        }

    }
   
    return n;
};