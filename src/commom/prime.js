function isPrime(a) {
    if( a == 1) {
        return false
    }

    let numdiv = 0

    for (let i = 0; i < a; i++) {
        if (Number.isInteger(a / i))
        numdiv ++
    } 

    if (numdiv > 1) {
        return false
    }
    return true
}

module.exports = { isPrime }