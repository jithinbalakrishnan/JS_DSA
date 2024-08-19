// https://www.geeksforgeeks.org/print-sums-subsets-given-set/
let arr = [2, 4, 5]
function subsetSums(data) {
    let temp = [0]
    for(let i =0; i< data.length; i++) {
         let tempLength = temp.length;
        for(let j = 0 ; j < tempLength; j++) {
            let sum = temp[j] + data[i]
            if(temp.indexOf(sum) === -1) {
                temp.push(sum)
            }
        }
        // console.log('temp', temp)
    }
    return temp
}

console.log(subsetSums(arr))