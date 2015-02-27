var app = angular.module("todoApp", []);

app.controller("TodoCtrl", function ($scope) {
  $scope.lista = [
    {
      titulo: "Aprender AngularJS",
      hecho: false
    },
    {
      titulo: "Crear mi primera app",
      hecho: false
    }
  ];
  $scope.agregarTodo = function () {
    $scope.lista.push({titulo: $scope.textoTodo, hecho: false});
    $scope.textoTodo = "";
  };
  $scope.quitarCompletos = function () {
    var i = 0;
    for (i; i<$scope.lista.length; i++) {
      if($scope.lista[i].hecho === true) {
        $scope.lista.splice(i, 1);
        i--;
      }
    }
  };
});




