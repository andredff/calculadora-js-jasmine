const Calculadora = {
  adicionar: (n1, n2) => {
    if(isNaN(n1) || isNaN(n2)) {
      return 0;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    return n1 + n2;
  },

  subtrair: (n1, n2) => {
    if(isNaN(n1) || isNaN(n2)) {
      return 0;
    }

    return n1 - n2;
  },

  dividir: (n1, n2) => {
    if (n2 === 0) { 
      return 'Erro';
    }

    if(isNaN(n1) || isNaN(n2)) {
      return 0;
    }

    return n1 / n2;
  },

  multiplicar: (n1, n2) => {
    if(isNaN(n1) || isNaN(n2)) {
      return 0;
    }
    
    return n1 * n2;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Calculadora;
}