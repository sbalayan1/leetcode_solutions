const gridTravelerTabulation = (m, n) => {
    //create a table that is roughly the size of the input
    //m and n represent the rows and columns. create a 2d array that corresponds

    //we do m+1 and n+1 because in 0x0 grid, there are actually 0 ways to move through it. Thus the first row and column will always be populated with 0 because we can't move through a column or row with a 0 index. It also means that the given row or column is empty which is invalid
    const matrix = Array(m + 1).fill().map(() => Array(n+1).fill(0)) //need to use map here or else
    matrix[1][1] = 1

    for (let i = 0; i<=m; i++) {
        for (let j = 0; j<=n; j++) {
            const num = matrix[i][j]

            //take the current element and add it into your right neighbor and down neighbor
            if (j+1 <= n) matrix[i][j+1] += num //instead of checking whether the element exists in the matrix, we can just check if j+1 is inbounds or not
            if (i+1 <= m) matrix[i+1][j] += num
        }
    }
    
    //once you fill the table. the answer should be at position m, n
    return matrix[m][n]
}

console.log(gridTravelerTabulation(2,2))

const recursiveGridTraveler = (m, n, memo={}) => {
    const pos = m + "," + n
    if (pos in memo) return memo[pos]
    if (!m || !n) return 0
    if (m === 1 && n === 1) return 1
    memo[pos] = recursiveGridTraveler(m-1, n, memo) + recursiveGridTraveler(m, n-1, memo)
    return memo[pos]
}

console.log(recursiveGridTraveler(2,2))

// time: O(n*m)
// space: O(n*m)