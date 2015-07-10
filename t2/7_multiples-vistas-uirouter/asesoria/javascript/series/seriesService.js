angular
  .module("series")
  .service("seriesService", seriesService);

seriesService.$inject = ['$http'];

function seriesService($http) {
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
}