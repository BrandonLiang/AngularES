	var page3 = function($scope, $resource, $http, es) {
  
    es.cluster.stats({
    }).then(function(response){
      $scope.message = JSON.stringify(response);
      console.log($scope.message);
    });

 };

