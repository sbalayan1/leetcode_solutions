# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

class Solution:
    def twoSum(self, nums, target):
        pairs = {}
        for index, num in enumerate(nums):
            diff = target - num
            if diff in pairs and index != pairs[diff]:
                return [index, pairs[diff]]
            
            pairs[num] = index
        
        return []
# // Time Complexity: O(n)
# // Space Complexity: O(n) 