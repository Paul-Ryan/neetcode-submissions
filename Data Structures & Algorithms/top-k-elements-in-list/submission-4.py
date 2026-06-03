
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        offset = 1000
        counts = [0] * 2001

        for num in nums:
            counts[num + offset] += 1

        frequencyList = [[] for _ in range(len(nums) + 1)]
        for index, count in enumerate(counts):
            if count > 0:
                frequencyList[count].append(index - offset)

        solution = []
        for count in range(len(frequencyList) - 1, 0, -1):
            for num in frequencyList[count]:
                solution.append(num)
                if len(solution) == k:
                    return solution

        return []