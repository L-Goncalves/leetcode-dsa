function isPalindrome(s: string): boolean {
    const pattern = /[\p{P}\p{S}\s]/gu

    const format = s.toLowerCase().replace(pattern, "")

    return (format.split("").reverse().join("") === format)
};


isPalindrome("A man, a plan, a canal: Panama") // Expects true