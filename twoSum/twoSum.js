// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(arr, num) {
    const pairs = {}
    for (let i = 0; i<arr.length; i++) {
        const tgt = num - arr[i]
        if (tgt in pairs && i !== pairs[tgt]) return [i, pairs[tgt]]
        pairs[arr[i]] = i
    }
    return []
}

// Time Complexity: O(n)
// Space Complexity: O(n) 