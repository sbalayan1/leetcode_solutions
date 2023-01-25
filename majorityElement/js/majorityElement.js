// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (arr) => {
    if (arr.length == 1) return arr[0]
    const numCounts = {}
    arr.forEach((num) => {
        numCounts[num] = num in numCounts ? numCounts[num] + 1 : 1
    })

    // console.log(numCounts)

    let max = arr[0]
    Object.keys(numCounts).forEach((key) => {
       if (numCounts[key] > numCounts[max]) max = parseInt(key, 10)
    })

    return max
}

const improvedMajorityElement = (arr) => {
    const numCounts = {}
    let max = arr[0]
    for (let i = 0; i<arr.length; i++) {
        const num = arr[i]
        numCounts[num] = num in numCounts ? numCounts[num] + 1 : 1
        if (numCounts[num] > arr.length/2)  return num
    }

    return max
}

const optimalMajorityElement = (nums) => {
    let candidate;
    let count = 0
    for (let num of nums) {
        if (count === 0) candidate = num
        count += (num === candidate ? 1 : -1)
    }

    return candidate
}

module.exports = optimalMajorityElement