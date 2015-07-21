angular.module('miApp', []);

angular.module("miApp").filter("cardinal", function () {
  return function (input) {
    if (input === 0) {
      return input;
    } else {
      var ultimoDigito = input % 10;

      if (ultimoDigito === 1 || ultimoDigito === 3) {
        return input + "ro";
      } else if (ultimoDigito === 2) {
        return input + "do";
      } else if (ultimoDigito === 4) {
        return input + "to";
      } else if (ultimoDigito === 8) {
        return input + "vo";
      } else if (ultimoDigito === 9) {
        return input + "no";
      } else if (ultimoDigito === 7 || ultimoDigito === 0) {
        return input + "mo";
      }
    }
  };
});