	var page2 = function($scope, $resource, $http) {
    var prefix = "http://stats.nba.com/stats/playbyplayv2?EndPeriod=10&EndRange=55800&GameID=",
        end = "&RangeType=2&Season=2015-16&SeasonType=Regular+Season&StartPeriod=1&StartRange=0";

    var page1Complete = function(response) {
      $scope.plays = response.data.resultSets[0].rowSet;
    };

    var onError = function(reason) {
      $scope.error = "Could not reach the url";
    };

    $scope.search = function(season, game){
      season_str = 200 + season;
      game_str = 10000 + game;
      var url = prefix + "00" + season_str.toString() + "0" + game_str.toString().substring(1,5) + end;
      $http.get(url).then(page1Complete, onError);
    };

    $scope.searchPeriod = '';
    $scope.season = 16;
    $scope.game = 1230;

    $scope.sortOrder = "-PLAYER1_NAME";
	};
