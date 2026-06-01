class Solution:    
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counts = [0] * 26
        base = ord("a")

        for i in range(len(s)):
            counts[ord(s[i]) - base] += 1
            counts[ord(t[i]) - base] -= 1

        for count in counts:
            if count != 0:
                return False
        return True