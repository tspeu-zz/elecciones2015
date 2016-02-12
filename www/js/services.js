angular.module('starter.services',['$scope', '$http', '$state'])


  .factory('listaPartidos',function($scope, $http, $state)
  {

      $http.get('bd.json').success(function(data)
      {
          $scope.partidos = data.partidos;
        //  $scope.ipPartido=$state.params.playlistId;

        //  console.log($scope.ipPartido);
          console.log( $scope.partidos.length);
          var notes = [];

      return {
        list : function(){
            return notes;
        },
        get : function(noteId){

            $scope.ipPartido=$state.params.playlistId;
            console.log($scope.ipPartido);
          //  for (var i=0; i < $scope.partidos.length; i++)
          //  {
          //      if(notes[i].id === noteId )
          //      {
          //        return notes[i];
          //      }
            //}
            //for (var i=0; i < $scope.partidos.length; i++) {
            //    $scope.groups[i] = {
            //      name: i,
            //      items: []
            //    };
            //    for (var j=0; j<3; j++) {
            //      $scope.groups[i].items.push(i + '-' + j);
            //    }
            //}

        }
      };
  })  ;
}
);
