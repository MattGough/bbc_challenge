'use strict';

iplayerApp.controller('ProgramListCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.getProgramList = function(letter) {
    $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/' + letter + '/programmes?page=1')
         .success(function(data) {
            var program_array = data.atoz_programmes.elements;
            var image_size = "192x108";

            for (var i = 0; i < program_array.length; i++) {
              var string = program_array[i].images.standard;
              program_array[i].image = string.replace("{recipe}", image_size);
             }

        $scope.programs = program_array;
    });
  }
}]);
