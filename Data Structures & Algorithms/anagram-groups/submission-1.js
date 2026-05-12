class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const anagramGroups = []
        // iterate through the array of strings
        for (let i = 0; i < strs.length; i++) {
            let foundAnagram = false;
            const wordOne = strs[i]
            // check for if each word is an anagram with the first word in each array in the solutions array
            for (let j = 0; j < anagramGroups.length; j++) {
                const wordTwo = anagramGroups[j][0]

                if (this.isAnagram(wordOne, wordTwo)) {
                    anagramGroups[j] = [...anagramGroups[j], wordOne]
                    foundAnagram = true
                } 
            }
            // if it's not an anagram with any, put it in a new array in the solutiions array
            if (!foundAnagram) anagramGroups.push([wordOne])
        }
        return anagramGroups
    }

    createLetterCounter() {
        // create a map of the letters
        const letterCounts = {};
        // ASCII code for 'a' is 97, 'z' is 122
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(97 + i);
            letterCounts[letter] = 0;
        }
        return letterCounts
    }


    isAnagram(wordOne, wordTwo) {
        // check length
        if (wordOne.length !== wordTwo.length) return false

        const letterCounts = this.createLetterCounter()
                
        // count the letter of the first word
        for (let i = 0; i < wordOne.length; i++) {
            const letter = wordOne[i]
            letterCounts[letter] = letterCounts[letter] + 1
        }

        // compare the map to the second word
        for (let i = 0; i < wordTwo.length; i++) {
            const letter = wordTwo[i]
            letterCounts[letter] = letterCounts[letter] - 1
            if (letterCounts[letter] < 0) return false
        }

        // return the result
        return true
    }
}