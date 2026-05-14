class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const anagramGroups = new Map()
        // go through the list of strings
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]

            const letterCount = new Array(26).fill(0)

            // create a map with keys as counts of letters and values are words
            str.split('').forEach(letter => {
                const idx = letter.charCodeAt(0) - "a".charCodeAt(0)
                letterCount[idx]++
            })

            const key = letterCount.join('-') // stable value-based key
            const wordGroup = anagramGroups.get(key) || []
            anagramGroups.set(key, [...wordGroup, str])
        }
        // return values
        return Array.from(anagramGroups.values())
    }
}