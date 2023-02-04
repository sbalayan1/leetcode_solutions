// Write a function that takes in a targetSum and an array of nums as arguments. The function should return an array containing any combination of elements that add to the targetSum. If no combo is found, return null


// [0, 1, 2, 3, 4, 5, 6, 7]
// 7, [5,4,3]
//     2, [5,4,3]
//         -3, [5,4,3] // return null

//     3, [5,4,3] //[]
//         0, [5,4,3] // => []

const howSumMemoization = (tgt, nums) => {
    if (tgt === 0) return []
    if (tgt < 0) return null

    for (let num of nums) {
        const res = howSumMemoization(tgt-num, nums)
        if (res) return [...res, num]
    }

    return null
}

console.log(howSumMemoization(7, [5,4,3]))

//Tabulation Recipe
    //visualize the problem as a table
    //size the table based on the inputs
    //initialize the table with default values. These default values need to be compatible with what you need to return
    //seed the trivial answer into the table. This seed value should occur when the input is small and you already know the answer
    //iterate through the table
    //fill further positions based on the current position

//howSum(7, [5,3,4])
// [0, 1, 2, 3, 4, 5, 6, 7]
// [[], n, n, [3], [4], [5], n, n]


const howSumTabulation = (tgt, nums) => {
    const tbl = Array(tgt+1).fill(null) 
    tbl[0] = []

    for (let i = 0; i<tbl.length; i++) {
        if (tbl[i]) {
            for (let num of nums) {
                if (i+num < tbl.length) tbl[i+num] = [...tbl[i], num]
            }
        }
    }

    return tbl[tgt]
}

console.log(howSumTabulation(7, [5,3,4]))