describe("Suite de teste para multiplicação", () => {
  const Calculadora = require('../../src/js/calculadora');

  it('deve retornar 6 para 2 e 3', () => {
    expect(Calculadora.multiplicar(2, 3)).toEqual(6);
  });

  it('deve retornar 12 para 6 e 2 em formato text', () => {
    expect(Calculadora.multiplicar('6', '2')).toEqual(12);
  });

  it('deve retornar 4.5 para 1.5 e 3', () => {
    expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    expect(Calculadora.multiplicar('1.5', '3')).toEqual(4.5);
  });

  it('deve retornar 0 para valor 1 invalid', () => {
    expect(Calculadora.multiplicar(undefined, 4)).toEqual(0);
  });
  
  it('deve retornar 0 para valor 2 invalid', () => {
    expect(Calculadora.dividir(1, undefined)).toEqual(0);
  });

})