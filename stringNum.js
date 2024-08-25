
// Input: a5b3c6d5
// Output: aaaaabbbccccccddddd

function getResult(str) {
    let data = [];
    let num = [];
    let result = ""
    for(let i =0; i < str.length; i++) {
        if(Number(str[i])) {
            num.push(str[i])
        } else {
            data.push(str[i])
        }
    }
    for(let j=0; j< num.length; j++) {
        for(let k=0; k< num[j]; k++) {
            result = result + data[j]
        }
    }
    console.log('data', data)
    console.log('num', num)
    console.log('result', result)
    return result
}
getResult("a5b3c6d5")