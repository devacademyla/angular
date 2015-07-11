angular.module("devflix").config(devflixConfig);

devflixConfig.$inject = ['$routeProvider', '$locationProvider'];

function devflixConfig($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/series.html",
      controller: "SeriesController",
      controllerAs: "vm"
    })
    .when("/contacto", {
      templateUrl: "templates/contacto.html",
      controller: "ContactoController",
      controllerAs: "vm"
    })
    .when("/series/:serie", {
      templateUrl: "templates/serie.html",
      controller: "SerieController",
      controllerAs: "vm"
    });

  $locationProvider.html5Mode(true);
}