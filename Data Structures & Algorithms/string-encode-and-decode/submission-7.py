class Solution:
    # first combine the strings with a length and special delimiter
    # decode the strings by reading the length, then reading that number of characters
    # add the characters you read into an array as a string and repeat
    def encode(self, strs: list[str]) -> str:
        res = ""
        for str in strs:
            delimiter = f"{len(str)}#"
            res = res + delimiter + str
        
        return res

    def decode(self, s: str) -> list[str]:
        res = []
        i = 0
        length = ""
        while i < len(s):
            char = s[i]
            if char.isdigit():
               length = length + char
            if char == "#":
                wl = int(length)
                res.append(s[i + 1:i + wl + 1]) 
                i = i + wl
                length = ""
            i += 1    
                    
        return res