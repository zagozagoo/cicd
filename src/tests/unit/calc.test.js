const { Soma, Sub, Multiplicacao, Divisao } = require("../../commom/calc")
describe('Calculadora', () => {
    describe('Soma', () => {
        it('deve retornar o resultado da soma de 1 + 2', () => {
            const res = Soma(1, 2);
            expect(res).toBe(3);
        })
    })
    describe('Subtracao', () => {
        it('deve retornar o resultado da subtracao 2 - 1', () => {
            const res = Sub(2, 1);
            expect(res).toBe(1);
        })
    })
    describe('Multiplicacao', () => {
        it('deve retornar o resultado da multiplicacao 2 * 1', () => {
            const res = Multiplicacao(2, 1);
            expect(res).toBe(2);
        })
        it('deve retornar o resultado da multiplicacao 3 * 1', () => {
            const res = Multiplicacao(3, 1);
            expect(res).toBe(3);
        })
    })
    describe('Divisao', () => {
        it('deve retornar o resultado da Divisao 10 / 2', () => {
            const res = Divisao(10, 2);
            expect(res).toBe(5);
        })
        it('deve retornar o erro da Divisao 3/0', () => {
            expect(() => {
                Divisao(3, 0)
            }).toThrow('A divisao por 0 não pode ser realizada') 
        })
        it('deve retornar o erro da Divisao 10 / 0', () => {
            expect(() => {
                Divisao(10, 0)
            }).toThrow('A divisao por 0 não pode ser realizada') 
        })
    })
})