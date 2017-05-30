	var page2 = function($scope, $resource, $http) {
    var complete = function(response){
      $scope.message = response;
    };

    var error = function(reason){
      $scope.error = "Error";
    };

    $http.get("http://localhost:9200/_cat/indices").then(complete, error);
	};

