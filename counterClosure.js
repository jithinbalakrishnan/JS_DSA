function counter() {
    let count = 0
    return function () {
        return count++
    }
}
let add = counter()
console.log(add())
console.log(add())
console.log(add())
console.log(add())