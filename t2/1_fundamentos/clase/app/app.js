var app = angular.module("miApp", []);

app.controller("MiController", function ($scope) {
  $scope.mensaje = "Estoy aprendiendo AngularJS";
  $scope.cambiarMensaje = function () {
    $scope.mensaje = "He aprendido a crear un controller";
  };
});