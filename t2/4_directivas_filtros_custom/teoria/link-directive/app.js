var app = angular.module("miApp", []);

app.controller("MiController", function () {
  var app = this;

  app.mensaje = "Hola";
});

app.directive("miDirectiva", function () {
  return function (scope, element, attrs) {

  };
});