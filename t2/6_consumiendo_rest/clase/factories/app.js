angular.module("miApp", []);

angular.module("miApp").controller("MiController", function ($scope, descargasFactory, $http) {
  $scope.mensaje = "Hola mundo";
  $http.get("http://descargas.com/series")
    .success(function (data, status, headers, config) {
      $scope.series = data;
    })
    .error(function (data, status, headers, config) {
      $scope.error = "ERROR";
    })

  $scope.datos = "";
  // ...
});

angular.module("miApp").factory("descargasFactory", function () {
  var descargasRealizadas = ["Manual de JavaScript", "Manual de AngularJS"];

  var interfaz = {
    nombre: "Manolo",
    getDescargas: function() {
      return descargasRealizadas;
    },
    nuevaDescarga: function(descarga) {
      descargasRealizadas.push(descarga);
    }
  };

  return interfaz;
});