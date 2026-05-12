class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pairs = {}
        let solution

        nums.forEach((num, i) => {
            const numMatch = target - num;

            if (!isNaN(pairs[numMatch])) {
                solution = [pairs[numMatch], i]
                console.log('found pair ', pairs[numMatch])
            }

            pairs[num] = i
        })

        return solution
    }
}