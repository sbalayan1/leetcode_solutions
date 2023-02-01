// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

//Brute Force
let gcdOfStrings = function(str1, str2) {
    const length1 = str1.length, length2 = str2.length

    function isValid(idx) {
        if (length1 % idx > 0 || length2 % idx > 0) return false
        const multiple1 = Math.floor(length1 / idx), multiple2 = Math.floor(length2 / idx)
        const base = str1.slice(0, idx)
        return base.repeat(multiple1) === str1 && base.repeat(multiple2) === str2
    }
    
    let minLen = Math.min(length1, length2)
    while (minLen > 0) {
        if (isValid(minLen)) return str1.slice(0, minLen)
        minLen --
    }

    return ""
    
}

//Euclidean Algorithm

let euclideanGCDofStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return ""
    const gcd = (len1, len2) => (len2 === 0 ? len1 : gcd(len2, len1 % len2))
    const length = gcd(str1.length, str2.length)
    return str1.slice(0, length)
}