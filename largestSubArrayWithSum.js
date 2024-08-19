// Find the length of largest subarray with 0 sum
// https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/
let arr = [15, -2, 2, -8, 1, 7, 10, 23]

function getLargestSubArr (data) {
    
    let maxLength = 0
    let result = []
    // Pick a starting point
    for(let i= 0 ; i < data.length; i++) {
          let sum = 0
          let temp = []
       for(let j = i; j < data.length; j++) {
            sum = sum + data[j]
            temp.push(data[j])
           // Initialize curr_sum
            // for every starting point
            if(sum === 0) {
                console.log('sum', sum)
                // let index = temp.indexOf(data[j])
                // temp.splice(0, index)
                console.log(temp)
                maxLength = Math.max(maxLength, temp.length)
                result = temp.length > result.length ? [...temp]: result
            }
            
            // console.log(temp)
       }
    }
    console.log('result', result)
   return maxLength
}

console.log('getLargestSubArr', getLargestSubArr(arr))