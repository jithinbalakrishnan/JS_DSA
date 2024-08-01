const arr1 = [5, 10, 2, 56];
function getSortArray (arr){
    for (let i = 0; i <= arr.length; i++) {
        for (let k=0 ; k <= arr.length; k++ ) {
            if(arr[i] < arr[k]) {
                let temp = arr[i];
                arr[i] =arr[k];
                arr[k] = temp
            }
        }
    }
    return arr
}
console.log(getSortArray(arr1))