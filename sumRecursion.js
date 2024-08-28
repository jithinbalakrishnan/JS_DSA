

let sum = (data) => data.reduce((a,c) => a = a+c)
function add(...a) {
    let re = sum(a)
    // console.log('result', resu)
    return function(...b) {
        console.log('b', b)
        if(typeof b === 'object' && b.length > 0) {
            let re1 = sum(b)
            return add(re+re1)
        } else {
            return re
        }
    }
}
console.log(add(2,3,4)(1)(2,3)(9,10)())