class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counts = {}
        for i in nums:
            if i in counts:
                return True
            counts[i] = i
        return False
        