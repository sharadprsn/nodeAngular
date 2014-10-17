inventoryApp.directive('dataTable',function(){
	return{
		restrict : 'AE',
		replace : true,
		link: function($scope,$element,$attr){
			var id = $element.attr('id');
			var data = $element.attr('gridElements');
			var columnDefs = $scope.options.columnDefs;
			$("#"+id).datagrid({
				data:data,
				columns:[columnDefs]
			});
		}
	}
});

inventoryApp.directive('menu',function(){
	return{
		restrict: 'AE',
		template:"<ul><li>hi</li></ul>",
		link: function($scope,$element,$attr){
			console.log('reached');
		}
	}
});
