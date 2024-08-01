const arr1 = [6, 5, 10, 10, 5, 2, 56, 6];

function reverseArray(inputArr) {
    let newArr = []
    for(i = inputArr.length -1 ; i>= 0 ; i--) {
        newArr.push(inputArr[i])
    }
    return newArr
}
console.log(reverseArray(arr1))