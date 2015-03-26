angular.module("miApp", ['ui.router']);

angular.module('miApp').config(miAppConfig);
angular.module('miApp').controller('ListaController', ListaController);

miAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
ListaController.$inject = ['$scope'];

function miAppConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('inicio', {
      url: '/inicio',
      templateUrl: 'templates/inicio.html'
    })
    .state('lista', {
      url: '/lista',
      templateUrl: 'templates/lista.html',
      controller: 'ListaController'
    })
    .state('lista.item', {
      url: '/:item',
      templateUrl: 'templates/lista.item.html',
      controller: function ($scope, $stateParams) {
        $scope.item = $stateParams.item;
      }
    })
}

function ListaController($scope) {
  $scope.lista = [
    {nombre: 'Leche'},
    {nombre: 'Huevos'},
    {nombre: 'Pan'},
    {nombre: 'Queso'}
  ];

  $scope.seleccionarItem = function (itemSeleccionado) {
    ($scope.lista).each(function (item) {
      item.seleccionado = false;
      if (itemSeleccionado === item) item.seleccionado = true;
    })
  };
}