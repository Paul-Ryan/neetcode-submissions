class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        letter_counts = {}
        for char in s:
            letter_counts[char] = letter_counts.get(char, 0) + 1
        for char in t:
            if letter_counts.get(char, 0) == 0:
                return False
            else: 
                letter_counts[char] = letter_counts[char] - 1
        return True