angular.module("devflix", []);

angular.module("devflix").controller("SerieController", function () {
  this.serie = {
    titulo: "Suits",
    estreno: 2011,
    tag: "TV-14",
    numTemporadas: 3,
    descripcion: "Mike Ross, un joven brillante pero que nunca terminó la universidad, impresiona a un importante abogado y consigue trabajo en un prestigioso bufete."
  };
});

angular.module("devflix").controller("ContactoController", function ($scope) {
  $scope.nombre = "";
  $scope.email = "";
  $scope.telefono = "";
  $scope.website = "";
  $scope.mensaje = "";
});