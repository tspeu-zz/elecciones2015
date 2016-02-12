angular.module('starter.controller', [])

.controller('ListController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/bd.json').success(function(data) {
          $scope.partidos = data.partidos;
          console.log($scope.partidos);

          $scope.ipPartido=$state.params.playlistId;
          console.log($scope.ipPartido);

    });

  }

]);
