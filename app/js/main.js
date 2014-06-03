require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		text: '../../bower_components/requirejs-text/text',
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min','lib/jquery/jquery-1.8.2.min'],
        bootstrap: '../../scripts/bootstrap',
        bxSlider: '../../plugins/jquery-bxslider/jquery.bxslider',
        waypoints: '../../plugins/jquery-waypoints/waypoints',
        jquerywaypoints: '../../plugins/jquery-waypoints/waypoints-sticky',
        wisdom: '../../scripts/wisdom',
        sequence: '../../plugins/jquery-sequense/jquery.sequence'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
        'jquery' : {'exports' : 'jquery'},
        'bootstrap':{
            deps: ['jquery']
        },
        'bxSlider' : {'exports' : 'bxSlider'},
        'waypoints' : {'exports' : 'waypoints'},
        'jquerywaypoints' : {'exports' : 'jquerywaypoints'},
        'wisdom' : {'exports' : 'wisdom'},
        'sequence' : {'exports' : 'sequence'}

	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes',
    'bootstrap',
    'wisdom',
], function(angular, app, routes,bootstrap,waypoints,jquerywaypoints,wisdom,sequence) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
