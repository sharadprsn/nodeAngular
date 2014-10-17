inventoryApp.controller('initCtrl',['$scope','$interval','inventoryService',
	function($scope,$interval,inventoryService){
		$scope.orgName = "Shivam Inventory Management System";

		$interval(function(){
			$scope.clock = formatAMPM(new Date());
		},1000);

		$scope.init = function(){
			console.log('init called');
			inventoryService.getUserOrg(function(response){
				console.log(response.data);
				$scope.orgName = response.data.orgName;
			});
			
		}

}]);
