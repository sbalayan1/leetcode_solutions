# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

def two_sum(nums, target)
    pairs = {}
    nums.each_with_index do |num, idx|
        diff = target - num
        if pairs.key?(diff) && idx != pairs[diff]
            return [idx, pairs[diff]]
        end

        pairs[num] = idx
    end
    return []
end


# // Time Complexity: O(n)
# // Space Complexity: O(n) 