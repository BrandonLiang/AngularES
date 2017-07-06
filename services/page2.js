	var page2 = function($scope, $resource, $http, es) {
      
    $scope.add = function(typee, user, original, compound, neutral, positive, negative, tweet) {
      es.index({
        index: "twitter_network_sentiment",
        type: typee,
        id: '1',
        body: {
          "User": user,
          "Original_User/Web": original,
          "Neutral": neutral,
          "Compound": compound,
          "Positive": positive,
          "Negative": negative,
          "Tweet": tweet
        }
      }, function(error, response) {
        $scope.message = response;
      });
    }
  };
