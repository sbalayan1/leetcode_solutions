//Tabulation Recipe
    //visualize the problem as a table
    //size the table based on the inputs
    //initialize the table with default values. These default values need to be compatible with what you need to return
    //seed the trivial answer into the table. This seed value should occur when the input is small and you already know the answer
    //iterate through the table
    //fill further positions based on the current position


//Problem: Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments. The function should return a boolean indicating whether or not its is possible to generate the targetSum using numbers from the array

//Test:
    //canSum(7, [5,3,4]) //=> True
    //How do we figure out the size of our table?
        //think about what's going to change throughout the problem. If we can reuse the nums of the array then it's not like we're shrinking the size of the array. However if we look at our targetSUm, we do have a goal of reaching that targetSum. Essentially we're going to increase to that over time

function canSumTabulation(targetSum, nums) {
    //create an array that is roughly the size of our targetSum
    const table = Array(targetSum+1).fill(false)
    //seed the trivial answer => targetSum 0 is always possible because you can always use no elements within the nums array to make a sum of 0
    table[0] = true

    for (let i = 0; i<targetSum+1; i++) {
        if (table[i]) {
            for (let j = 0; j<nums.length; j++) {
                if (i + nums[j] < targetSum+1) table[i + nums[j]] = true
            }
        }
    }

    return table[table.length-1]
}

// console.log(canSum(7, [5,3,4]))

// time && space complexity analysis:
//     m = targetSum
//     n = nums.length

//     Time: O(m*n)
//     Space: O(m)

// canSum(7, [5,4,3])
//     canSum(2, [5,4,3]) //false
//         canSum(-3, [5,4,3]) // false

//     canSum(3, [5,4,3]) //true
//         canSum(0, [5,4,3]) // true

    
function canSumMemoization(target, nums, memo={}) {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if (target < 0) return false
    for (let num of nums) {
        memo[target] = canSumMemoization(target - num, nums, memo)
        if (memo[target]) return true
    }

    return false
}

console.log(canSumMemoization(7, [5,4,3]))

