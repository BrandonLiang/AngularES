	var page1 = function($scope, $resource, $http, es) {
      
    //es.search({
    //  index: "twitter_network_sentiment",
    //  //type: "hillary_before",
    //  size: 500
    //  //body: {
    //  //  "query":
    //  //    {
    //  //      "match": {
    //  //        Tweet:"Trump"
    //  //      }
    //  //    },
    //  //}
    //}).then(function (response) {
    //  $scope.tweets = response.hits.hits;
    //});

    es.cat.indices({
      h:['index', 'docs.count']
    }).then(function(response){
      let lines = response.split('\n');
      let indices = lines.map(function(line){
        let row = line.split(' ');
        //return {name: row[0], count: row[1]};
        return row[0];
      });
      $scope.indices = indices;
    });

    $scope.searchIndex = function(indexx){
      es.search(
          {
        index: indexx,
        size: 5000
      }
      ).then(function (response) {
        let h = response.hits.hits;
        let types = new Set();
        for (hit in h){
          if (!(types.has(h[hit]._type))){
            types.add(h[hit]._type);
          }
        }
        $scope.types = Array.from(types);
        //console.log($scope.types);
      });
    };

    $scope.search = function(indexx, type){
      es.search({
        index: indexx,
        type: type,
        size: 500
      }).then(function (response) {
        $scope.tweets = response.hits.hits;
      });
    };
};

