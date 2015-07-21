angular.module("miApp", ["ngRoute"]);

angular.module("miApp").config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app.html",
      controller: "AppController"
    })
    .when("/bryam", {
      templateUrl: "app.html",
      controller: "BryamController"
    });
});

angular.module("miApp").controller("AppController", function ($scope) {
  $scope.mensaje = "página de inicio";
});

angular.module("miApp").controller("BryamController", function ($scope) {
  $scope.mensaje = "Bryam";
});









