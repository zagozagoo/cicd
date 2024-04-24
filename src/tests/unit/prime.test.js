const { isPrime } = require("../../commom/prime")
describe ( 'Primo', () => {
    it('deve retornar o número 3 é primo', () => {
        const res = isPrime(3);
        expect(res).toBeTruthy();
    })
    it('deve retornar o número 1 não é primo', () => {
        const res = isPrime(1);
        expect(res).toBeFalsy();
    })
    it('deve retornar o número 47 é primo', () => {
        const res = isPrime(47);
        expect(res).toBeTruthy();
    })
    it('deve retornar o número 8 não é primo', () => {
        const res = isPrime(8);
        expect(res).toBeFalsy();
    })
    it('deve retornar o número 4 não é primo', () => {
        const res = isPrime(4);
        expect(res).toBeFalsy();
    })
})
