describe("Suite de teste de divisão", () => {
  const Calculadora = require('../../src/js/calculadora');

  it('deve retornar 2 para 6 e 3', () => {
    expect(Calculadora.dividir(6, 3)).toEqual(2);
  });

  it('deve retornar 2 para 6 e 3 em formato text', () => {
    expect(Calculadora.dividir('6', '3')).toEqual(2);
  });

  it('deve retornar 1.5 para 4.5 e 3', () => {
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    expect(Calculadora.dividir('4.5', '3')).toEqual(1.5);
  });

  it('deve retornar "Erro" para divisao por 0', () => {
    expect(Calculadora.dividir(4, 0)).toEqual('Erro');
  })

  it('deve retornar 0 para valor 1 invalid', () => {
    expect(Calculadora.dividir(undefined, 5)).toEqual(0);
  });
  
  it('deve retornar 0 para valor 2 invalid', () => {
    expect(Calculadora.dividir(1, undefined)).toEqual(0);
  });

});