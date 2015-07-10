angular.module("serie", []);

angular.module("serie").controller("SerieController", ["$scope", "$routeParams", "$filter", "seriesService", function ($scope, $routeParams, $filter, seriesService) {
  seriesService.getSeries().then(function (data) {
    $scope.series = data;
    for (var i = 0; i < $scope.series.length; i++) {
      if ($scope.series[i].slug === $routeParams.serie) $scope.serie = $scope.series[i]
    }
  });
}]);