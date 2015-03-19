angular.module("devflix", ["serie", "contacto", "ngRoute"]);

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
      templateUrl: "templates/serie.html"
    });

  $locationProvider.html5Mode(true);
});