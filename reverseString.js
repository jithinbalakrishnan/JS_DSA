
function reverseString(value) {
    let newString= value.split('').reverse().join('')
    return newString
}
console.log('reverseString', reverseString("Jithin"))


const abc = "Hey Jithin how are you"


let reverse = function(str) {
    let arr = str.split(' ')
    let result = ''
    arr.forEach(i => {
        let reversedStr = i.split('').reverse().join('')
        // result = result+ " " + reversedStr
        result = result.concat(" ", reversedStr)
    })
    return result
}

console.log(reverse(abc))