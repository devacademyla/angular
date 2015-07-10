var app = angular.module("miApp", []);

app.controller("MiController", function ($scope) {
  $scope.myPrimitive = 50;
  $scope.myObject = {aNumber: 11};
  $scope.imprimir = function () {
    console.log("$scope.myPrimitive = " + $scope.myPrimitive);
    console.log("$scope.myObject.aNumber = " + $scope.myObject.aNumber);
  };
});