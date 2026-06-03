
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        numCounts = {}
        # this does not work because this does not create len(nums) + 1 independent lists. It creates one inner list and repeats references to that same list.
        # frequencyList = [[]] * (len(nums) + 1)
        frequencyList = [[] for i in range(len(nums) + 1)]
        
        # create hashmap to count occurences 
        for num in nums:
            numCounts[num] = 1 + numCounts.get(num, 0)
           
        # frequencyList: key = number of occurances, value = [nums...]    
        for num, count in numCounts.items():
            frequencyList[count].append(num)

        solution = []
        for i in range(len(frequencyList) - 1, 0, -1):
            for n in frequencyList[i]:
                solution.append(n)
                if len(solution) == k:
                    return solution
      
        return []