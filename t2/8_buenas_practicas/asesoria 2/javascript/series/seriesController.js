angular
  .module("series")
  .controller("SeriesController", SeriesController);

SeriesController.$inject = ['seriesService'];

function SeriesController(seriesService) {
  var vm = this;
  seriesService.getSeries().then(function (data) {
    vm.series = data;
  });
}