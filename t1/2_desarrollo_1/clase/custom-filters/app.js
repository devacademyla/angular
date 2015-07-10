var app = angular.module('miApp', []);

app.filter('ordinal', function() {

  return function(numero) {

    if (numero === 0) {
      return numero;
    } else {

      var ultimoDigito = numero % 10;

      if(ultimoDigito === 1 || ultimoDigito === 3) {
        return numero + 'ro'
      } else if(ultimoDigito === 2) {
        return numero + 'do'
      } else if (ultimoDigito === 4 || ultimoDigito === 5) {
        return numero + 'to'
      } else if (ultimoDigito === 7 || ultimoDigito === 0) {
        return numero + 'mo'
      } else if (ultimoDigito === 8) {
        return numero + 'vo'
      } else if (ultimoDigito === 9) {
        return numero + 'no'
      } else if (ultimoDigito === 0) {
        return numero + 'mo'
      }
    }
  };
});