function Soma(a, b) {
    return a + b;
}
function Sub(a, b) {
    return a - b;
}

function Multiplicacao(a,b) {
    return a*b;
}

function Divisao(a,b) {
    if (b == 0) {
        throw new Error('A divisao por 0 não pode ser realizada')
    }
    return a/b;
}

module.exports = { Soma, Sub, Multiplicacao, Divisao }