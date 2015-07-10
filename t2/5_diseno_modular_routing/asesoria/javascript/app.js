angular.module("devflix", ["series", "serie", "contacto", "ngRoute"]);

angular.module("devflix").config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/series.html",
      controller: "SeriesController"
    })
    .when("/contacto", {
      templateUrl: "templates/contacto.html",
      controller: "ContactoController"
    })
    .when("/series/:serie", {
      templateUrl: "templates/serie.html",
      controller: "SerieController"
    });

  $locationProvider.html5Mode(true);
});