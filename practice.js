let lengthOfLongestSubstring = function (str) {
    let arr = []
    let longestStringLength = 0;
    for(let i= 0 ; i< str.length; i++) {
        // console.log('letter', str[i])

        let charIndex = arr.indexOf(str[i])
        if(charIndex !== -1) {
            arr.splice(0, charIndex +1)
        }
        // console.log('charIndex', charIndex)

        arr.push(str[i])
        console.log('arr', arr)
        console.log( arr.length)
        // longestStringLength = longestStringLength  > arr.length ? longestStringLength : arr.length;
    }
    // console.log('longestStringLength', longestStringLength)
    // console.log('arr', arr)
}

console.log(lengthOfLongestSubstring("pwwkew"))