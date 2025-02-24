// Longest substring without repeating characters 
// https://duncan-mcardle.medium.com/leetcode-problem-2-longest-substring-without-repeating-characters-javascript-993890bf8eac

var lengthOfLongestSubstring = function (s) {
    // Initialise an array to store the running characters and a longest string length variable
    let currentString = [];
    let longestStringLength = 0;
    let word = ''

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Chop the array off after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
        word = currentString.length > word.length ? currentString.join('') : word
    }

    return longestStringLength;
};

console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("abcaawxyz"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("ccabcdff"))