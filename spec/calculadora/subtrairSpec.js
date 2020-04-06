describe("Suite de teste de subtração", () => {
  const Calculadora = require('../../src/js/calculadora');

  it('deve retornar 5 para 8 e 3', () => {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it('deve retornar 5 para 8 e 3 em formato text', () => {
    expect(Calculadora.subtrair('8', '3')).toEqual(5);
  });

  it('deve retornar 4 para 5.5 e 1.5', () => {
    expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
    expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
  });

  it('deve retornar 0 para valor 1 inválido', () => {
    expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
  })

  // it('deve retornar 5 para 8 e 3', () => {
  //   expect(Calculadora.subtrair(8, 3)).toEqual(5);
  // });

});