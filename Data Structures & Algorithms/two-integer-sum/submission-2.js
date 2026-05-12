class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pairs = {}
        let solution

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const numMatch = target - num;

            if (!isNaN(pairs[numMatch])) {
                solution = [pairs[numMatch], i]
                break
            }

            pairs[num] = i
        }

        return solution
    }
}