let arr = ["0001", "00200", "003001"]

function removeItems (input_arr) {
    let newArr = []
    for(let i = 0 ; i< input_arr.length; i++) {
        let str = input_arr[i]
        let newStr = str.replaceAll('0', '')
        newArr.push(newStr)
    }
    return newArr;
}
console.log(removeItems(arr))