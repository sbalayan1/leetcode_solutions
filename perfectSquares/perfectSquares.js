// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.


//bfs solution
const bfsNumSquares = (n) => {
    let sqrs = new Set(), i = Math.floor(Math.sqrt(n))
    while (i > 0) {
        sqrs.add(i*i)
        i --
    }

    if (sqrs.has(n)) return 1 
    const queue = [[n, 0]]
    while (queue.length > 0) {
        const [curr, moves] = queue.shift()

        for (let sqr of sqrs) {
            if (curr < sqr) continue
            const diff = curr - sqr
            if (sqrs.has(diff)) return moves + 2
            queue.push([diff, moves + 1])
        }
    }
}

//top down memoization
const memoNumSquares = (n, memo={}) => {
    if (n in memo) return memo[n]
    if (n === 0) return 0
    let min = Infinity
    for (let i = 1; i*i <= n; i++) {
        min = Math.min(min, memoNumSquares(n - i*i, memo) + 1)
    }

    return memo[n] = min
}

//bottoms up tabulation
const tabNumSquares = (n) => {
    const squares = []
    for (let i = 1; i*i <= n; i++) squares.push(i*i)

    const arr = Array(n+1).fill(Infinity)
    arr[0] = 0

    for (let i = 1; i<=n; i++) {
        for (let sqr of squares) {
            if (i < sqr) break
            arr[i] = Math.min(arr[i], arr[i - sqr] + 1)
        }
    }

    return arr[n]
}
