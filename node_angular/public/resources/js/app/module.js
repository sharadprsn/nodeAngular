var inventoryApp = angular.module('inventoryApp',['ui.router']);

inventoryApp.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
    
    	$urlRouterProvider.otherwise('/home');
    
    	$stateProvider
        	.state('home', {
            	url: '/home',
            	templateUrl: 'partials/partial-home.html'
        	})
        	.state('transact', {
            	url: '/transact',
            	templateUrl: 'partials/transact.html'    
        }).state('stock', {
                url: '/stock',
                views:{
                    'upperPannel@stock':{
                        templateUrl: 'partials/table.html',
                        controller:'stockTableCtrl'
                    },
                    'lowerPannel@stock':{
                        templateUrl: 'partials/vehicleSubmissionForm.html',
                        controller:'stockFormCtrls'
                    }
                }
        });
        
}]);

