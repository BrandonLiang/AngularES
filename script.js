	// create the module and name it app
	var app = angular.module('dataApp', ['ngRoute', 'ngResource', 'smart-table']); // Register smart-table as a module

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

	// create the controller and inject Angular's $scope
  // use my customized service
  app.controller('page1Controller', ["$scope", "$resource", "$http", page1]);

  app.controller('page2Controller', ["$scope", "$resource", "$http", page2]);

  app.controller('page3Controller', ["$scope", "$resource", "$http", page3]);
