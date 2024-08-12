function isPrime(num) {
    if(num === 1 || num ===2 ) return false
    for(let j= 2; j< num; j++) {
        if(num % j === 0) return false
    }
    return true
}

function getPrime(limit) {
    let temp =[]
    for(let i= 1; i< limit; i++ ) {
        let isPrimeNum = isPrime(i)
        if(isPrimeNum) temp.push(i)
    }
    return temp;
}
console.log(getPrime(100))