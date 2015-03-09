var app = angular.module('miApp', []);
app.directive("miFormulario", function () {
  return {
    restrict: "A",
    templateUrl: "formulario.html"
  };
});