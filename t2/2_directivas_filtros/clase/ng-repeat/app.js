var app = angular.module("miApp", []);

app.controller("MiController", function ($scope) {
  $scope.myArrayOfPrimitives = [ 11, 22 ];
  $scope.myArrayOfObjects = [{num: 101}, {num: 202}];

  $scope.imprimir = function () {
    console.log($scope.myArrayOfPrimitives);
    console.log($scope.myArrayOfObjects);
  };
});