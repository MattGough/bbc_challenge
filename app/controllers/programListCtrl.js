'use strict';

iplayerApp.controller('ProgramListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1')
       .success(function(data) {
          var program_array = data.atoz_programmes.elements;
          $scope.programs = program_array;
  });
}]);
