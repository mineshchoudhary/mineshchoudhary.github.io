var app = angular.module('portfolio',['ngRoute','ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
	//route for home page

	.when('/profile', {
		templateUrl : 'templates/profile.html',
		controller  : 'profileController'
	})

	.when('/skills', {
		templateUrl : 'templates/skills.html',
		controller  : 'profileController'
	})

	.when('/work', {
		templateUrl : 'templates/work.html',
		controller  : 'profileController'
	})

	.when('/resume', {
		templateUrl : 'templates/resume.html',
		controller  : 'profileController'
	})

	.when('/contact', {
		templateUrl : 'templates/contact-modal.html',
		controller  : 'profileController'
	})
	
	.otherwise({redirectTo: '/profile'});
})

app.controller('profileController',function($scope) {
	$scope.demo = "Demo";
	console.log("-=-=-=-=-=-=");
});