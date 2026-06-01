class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # we can keep track of the indexes and need pair
        # we can use the target as the key and if there is a value we return the value and our current index
        # if the pair comes up as we iterate, we can return the index and the pair's index
        pairs = {}
        
        for i, num in enumerate(nums):
            pair = target - num
            if num in pairs:
                return [pairs[num], i]
            else:
                pairs[pair] = i
        return [0, 0]