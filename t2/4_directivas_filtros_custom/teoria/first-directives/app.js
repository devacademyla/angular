angular.module('miApp', []);

angular.module('miApp').directive("miFormulario", function () {
  return {
    restrict: "EA",
    templateUrl: "formulario.html"
  }
});