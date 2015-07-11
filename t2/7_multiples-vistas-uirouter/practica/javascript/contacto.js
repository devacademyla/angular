angular.module("contacto", []);

angular.module("contacto").controller("ContactoController", ["$scope", function ($scope) {
  $scope.nombre = "";
  $scope.email = "";
  $scope.telefono = "";
  $scope.website = "";
  $scope.mensaje = "";
}]);