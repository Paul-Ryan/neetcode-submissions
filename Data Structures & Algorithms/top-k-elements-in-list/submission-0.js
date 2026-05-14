class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]

            map[num] = (map[num] || 0) + 1
        }

        const arrayValues = Object.entries(map)
        const sortedValues = arrayValues.toSorted((a, b) => b[1] - a[1])
        const topResults = sortedValues.slice(0, k)
        const answer = topResults.map(([n]) => n)

        return answer
    }
}
