angular.module("series", []);

angular.module("series").controller("SeriesController", ["seriesService", "$scope", function (seriesService, $scope) {
  seriesService.getSeries().then(function (data) {
    $scope.series = data;
  });
}]);

angular.module("series").service("seriesService", ['$http', function ($http) {
  this.getSeries = function () {
    return $http.get('http://devflix.herokuapp.com/series')
      .then(getSeriesComplete)
      .catch(getSeriesFailed);

    function getSeriesComplete(response) {
      return response.data;
    }

    function getSeriesFailed(error) {
      $log.error('timelineService.getPostsFailed: ' + error);
    }
  };
}]);