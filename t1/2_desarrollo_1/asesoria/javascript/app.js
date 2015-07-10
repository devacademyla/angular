var app = angular.module("devflix", []);

app.controller("SeriesController", function ($scope) {
  $scope.series = ['breaking-bad', 'dexter', 'family-guy', 'friends', 'gossip-girl', 'homeland', 'how-i-met-your-mother', 'marco-polo', 'modern-family', 'skins', 'suits', 'supernatural', 'the-office'];
});