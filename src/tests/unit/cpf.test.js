const { validateCpf } = require("../../commom/validateCpf");

describe("CPF", () => {
    it("Se o CPF for válido, deve retornar verdadeiro.", () => {
        const res = validateCpf("08363535958")
        expect(res).toBe(true)
    });

    it("Se o CPF for inválido, deve retornar falso.", () => {
        const res = validateCpf("08363535959")
        expect(res).toBe(false)
    });

    it("Se o CPF for inválido, deve retornar falso.", () => {
        const res = validateCpf("22212222222")
        expect(res).toBe(false)
    });

    it("Se o CPF for inválido, deve retornar verdadeiro.", () => {
        const res = validateCpf("08513060984")
        expect(res).toBe(true)
    });
});