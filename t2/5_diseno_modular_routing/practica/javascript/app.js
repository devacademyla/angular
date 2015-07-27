angular.module("devflix", [
  "ngRoute",
  "series",
  "serie",
  "contacto"
]);

angular.module("devflix").config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/seriesTemplate.html",
      controller: "SeriesController"
    })
    .when("/contacto", {
      templateUrl: "templates/contacto.html",
      controller: "ContactoController"
    })
    .when("/series/:serie", {
      templateUrl: "templates/serie.html",
      controller: "SerieController",
      controllerAs: "serieCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
});