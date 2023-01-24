// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(str) {
    if (str.length === 0) return false
    const pairs = ["()", "[]", "{}"]
    const obj = {}
    pairs.forEach(pair => obj[pair[0]] = pair[1])
    const stack = []
    for (let i = 0; i<str.length; i++) {
        if (str[i] in obj) {
            stack.push(str[i])
        } else {
            const lts = stack.pop()
            if (obj[lts] !== str[i]) return false
        }
    }

    return stack.length === 0
}

const testVariable = "Hello World"

// module.exports = isValid