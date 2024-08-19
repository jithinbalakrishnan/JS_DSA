// https://flexiple.com/javascript/find-duplicates-javascript-array

const arr1 = [6, 5, 10, 10, 5, 2, 56, 6];

// const uniqueArr = [...new Set(arr)];

// let check_duplicate_in_array = (input_array) => {
//     let duplicate_arr = input_array.filter((i, index) => {
//         return input_array.indexOf(i) !== index
//     });
//     return duplicate_arr

// }
// console.log(check_duplicate_in_array(arr1))

// const getDuplicate = (arr) => {
//     let duplicate = [];
//     arr.forEach((element, index) => {
//         if(arr.indexOf(element) !== index) {
//             duplicate.push(element)
//         } 
//     });
//     return duplicate
// }

// const getDuplicate = (arr) => {
//   let duplicate = [];

//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = i+1; j <arr.length; j++) {
//         if(arr[i] === arr[j]) {
//             if(!duplicate.includes(arr[i])) {
//                 duplicate.push(arr[i])
//             }
//         }
//     }
//   }
//   return duplicate
// };

// console.log(getDuplicate(arr1))

// TO DO Remove duplicate item from an array

const removeDuplicateItems = (input_arr) => {
    let updatedArr = []
    for(let i = 0; i<= input_arr.length; i++) {
        for(let j= 0; j<input_arr.length; j++) {
            if(input_arr[i] === input_arr[j]) {
                if(updatedArr.indexOf(input_arr[i]) == -1 ) {
                    updatedArr.push(input_arr[i])
                }
            }
        }
    }
    return updatedArr
}
console.log(removeDuplicateItems(arr1))

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

let result = items.reduce((ac, cu) => {
    if(!ac.includes(cu)) {
        ac.push(cu)
    }
    return ac
},[])