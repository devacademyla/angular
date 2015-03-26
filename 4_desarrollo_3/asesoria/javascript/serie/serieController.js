angular
  .module("serie")
  .controller("SerieController", SerieController);

SerieController.$inject = ["$scope", "$routeParams", "seriesService"]

function SerieController($scope, $routeParams, seriesService) {
  seriesService.getSeries().then(function (data) {
    $scope.series = data;
    for (var i = 0; i < $scope.series.length; i++) {
      if ($scope.series[i].slug === $routeParams.serie) $scope.serie = $scope.series[i]
    }
  });
}