	// create the module and name it app
	var app = angular.module('dataApp', ['ngRoute', 'ngResource', 'smart-table', 'elasticsearch']); // Register smart-table & elasticsearch modules

  // create the es service from the esFactory
  //app.service('es', function(esFactory) {
  //  return esFactory( { host: 'localhost:9200' } );
  //});

  app.filter('myFilter', function() {
      return function(items) {
            var filtered = [];
                angular.forEach(items, function(item) {
                        filtered.push(item);
                            });
                   return filtered;
                     };
  });

	// configure our routes
	app.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
      .when('/', {
				templateUrl : 'pages/page1.html',
				controller  : 'page1Controller'
			})

			// route for the about page
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'page2Controller'
			})

			// route for the contact page
			.when('/page3', {
				templateUrl : 'pages/page3.html',
				controller  : 'page3Controller'
			});

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
	});

  // create a client instance and register it as a service
  app.service('es', function(esFactory) {
    return esFactory({ host: 'localhost:9200'});
  });

	// create the controller and inject Angular's $scope
  // use my customized service
  app.controller('page1Controller', ["$scope", "$resource", "$http", "es", page1]);

  app.controller('page2Controller', ["$scope", "$resource", "$http", "es", page2]);

  app.controller('page3Controller', ["$scope", "$resource", "$http", "es", page3]);
