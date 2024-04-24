function validateCpf(cpf) {
    // Primeira verificação
    let multiplier = 10
    let finalSum = 0

    for (let i = 0; i < 9; i++) {
        finalSum += Number(cpf[i]) * multiplier
        multiplier--
    }

    const firstRemainder = finalSum % 11;
    const firstVerifier = firstRemainder in [0, 1]
                          ? 0
                          : 11 - firstRemainder

    // Segunda verificação
    multiplier = 11
    finalSum = 0

    for (let i = 0; i < 10; i++) {
        finalSum += Number(cpf[i]) * multiplier
        multiplier--
    }

    const secondRemainder = finalSum % 11;
    const secondVerifier = secondRemainder in [0, 1]
                           ? 0
                           : 11 - secondRemainder
    
    return (firstVerifier == cpf[9] && secondVerifier == cpf[10])
}

module.exports = {validateCpf};