# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false


def is_valid(s)
    hash = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    stack = []
    s.each do |char|
        print()
        if hash.key?(char)
            stack.push(char)
        else
            return false if stack.length == 0
            lts = stack.pop()
            return false if hash[lts] != char
        end
    end

    return stack.length == 0
end