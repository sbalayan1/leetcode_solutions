# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Example 1:

# Input: rowIndex = 3
# Output: [1,3,3,1]
# Example 2:

# Input: rowIndex = 0
# Output: [1]
# Example 3:

# Input: rowIndex = 1
# Output: [1,1]

def get_row(rowIdx, memo={})
    return memo[rowIdx] if memo.has_key?(rowIdx)
    return [1] if rowIdx == 0

    left = get_row(rowIdx-1, memo)
    right = get_row(rowIdx-1, memo)
    output = []
    output.push(1)
    
    left.slice(1, left.length).each_with_index do |num, idx|
        output.push(num + right[idx])
    end

    output.push(1)
    memo[rowIdx] = output
    return output
end

# pascals_triangle(4)