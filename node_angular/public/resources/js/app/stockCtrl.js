inventoryApp.controller('stockTableCtrl',['$scope','inventoryService',
	function($scope,inventoryService){
		console.log("rached stockTableCtrl");
		$scope.options = {};
		$scope.items=[];
		$scope.init = inventoryService.getAllVehicles(function(response){
			$scope.items=response.data;
		});

		$scope.options.columnDefs=[{
				field : 'itemId',
				title : 'Id',
				width : 40
			}, {
				field : 'itemNumber',
				title : 'Item Number',
				width : 100
			}, {
				field : 'itemName',
				title : 'Item Name',
				width : 100
			}, {
				field : 'groupName',
				title : 'Group',
				width : 100
			}, {
				field : 'vehicleName',
				title : 'Vehicle Name',
				width : 100
			}, {
				field : 'location',
				title : 'Location',
				width : 100
			}, {
				field : 'mrp',
				title : 'MRP',
				width : 100
			}, {
				field : 'stock',
				title : 'Stock',
				width : 40
			}];

}]);

