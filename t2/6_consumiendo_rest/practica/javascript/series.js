angular.module("series", []);

angular.module("series").controller("SeriesController", function ($scope, SeriesService) {
  SeriesService.getSeries().then(function (data) {
    $scope.series = data;
  });
});

angular.module("series").service("SeriesService", function ($http) {
  this.getSeries = function () {
    return $http.get("http://devflix.herokuapp.com/series", { cache: true })
      .then(getSeriesCompleted)
      .catch(getSeriesFailed);

    function getSeriesCompleted(response) {
      return response.data
    }

    function getSeriesFailed(error) {
      console.log("Error");
    }
  };
});

