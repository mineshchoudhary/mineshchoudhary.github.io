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
		controller  : 'skillController'
	})

	.when('/work', {
		templateUrl : 'templates/work.html',
		controller  : 'workController'
	})

	.when('/resume', {
		templateUrl : 'templates/resume.html',
		controller  : 'resumeController'
	})

	.when('/contact', {
		templateUrl : 'templates/contact-modal.html',
		controller  : 'contactController'
	})
	
	.otherwise({redirectTo: '/profile'});
})

app.controller('profileController',function($scope) {
	console.log("-=-=-=profileController-=-=-=");
});

app.controller('skillController',function($scope) {
	console.log("-=-=-=skillController-=-=-=");
});

app.controller('workController',function($scope) {
	console.log("-=-=-=workController-=-=-=");
});

app.controller('resumeController',function($scope) {
	console.log("-=-=-=resumeController-=-=-=");
});

app.controller('contactController',function($scope) {
	console.log("-=-=-=contactController-=-=-=");
});