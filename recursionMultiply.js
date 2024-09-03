// function multiply(arr) {
//     let result = 1
//     for(let i=0; i< arr.length; i++) {
//         result = result *arr[i]
//     }
//     return result
// }
function multiply(arr) {
    console.log(arr)
    if(arr.length <= 0) {
        return 1
    } else {
        return arr[arr.length-1] * multiply(arr.splice(0, arr.length-1))
    }
    
}



console.log(multiply([1,2,3,4]))