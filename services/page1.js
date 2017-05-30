	var page1 = function($scope, $resource, $http) {
    var prefix = "http://stats.nba.com/stats/playbyplayv2?EndPeriod=10&EndRange=55800&GameID=",
        end = "&RangeType=2&Season=2015-16&SeasonType=Regular+Season&StartPeriod=1&StartRange=0";
    var url = prefix + "0021501230" + end;

    var page1Complete = function(response) {
      console.log(response);
      $scope.resource = response.data.resource;
      $scope.data = response.data.resultSets[0].rowSet;
    };

    var onError = function(reason) {
      $scope.error = "Could not reach the url";
    };

    $http.get(url).then(page1Complete);
		$scope.message = 'Everyone come and see how good I look!';
	};
