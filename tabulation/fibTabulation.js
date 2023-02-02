// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.
// The 0-th number of the sequence is 0.
// The 1-st number of the sequence is 1.
// To generate further numbers of the sequence, calculate the sum of previous two numbers.
// Solve this iteratively/memoization

function fibMemoization(n, memo={}) {
    if (n in memo) return memo[n]
    if (n == 0) return 0
    if (n <= 2) return 1
    memo[n] = fibMemoization(n-1, memo) + fibMemoization(n-2, memo)
    return memo[n]
}


//tabulation. Build a table whose size is equal to the input

function fibTabulation(n) {
    const table = new Array(n+1).fill(0)
    const length = table.length
    table[0] = 0
    table[1] = 1    

    for (let i = 0; i<length; i++) {
      table[i+1] += table[i]
      table[i+2] += table[i]
    }
    
    return table[n]
}
 
// time: O(n)
// space: O(n)

console.log(fibTabulation(46))