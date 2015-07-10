angular.module("miApp", ["ngRoute"]);

angular.module("miApp").config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app.html",
      controller: "MiApp"
    })
    .when("/bryam", {
      templateUrl: "app.html",
      controller: "BryamCtrl"
    }
    .otherwise();
});

angular.module("miApp").controller("MiApp", ["$scope", function ($scope) {
  $scope.mensaje = "inicio";
}]);

angular.module("miApp").controller("BryamCtrl", ["$scope", function ($scope) {
  $scope.mensaje = "Bryam";
}]);