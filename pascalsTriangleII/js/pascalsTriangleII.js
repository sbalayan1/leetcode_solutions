var getRow = function(rowIndex, memo={}) {
    if (rowIndex in memo) return memo[rowIndex]
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    
    const left = getRow(rowIndex - 1, memo).slice(1)
    const right = getRow(rowIndex - 1, memo).slice(0, -1)
    const output = []
    output.push(1)
    for (let i = 0; i<left.length; i++) {
        output.push(left[i] + right[i])
    }

    output.push(1)
    memo[rowIndex] = output
    return output
};

module.exports = getRow