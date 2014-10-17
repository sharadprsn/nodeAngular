testApp.directive('viewPort',function(){
	return{
		restrict : 'AE',
		replace : true,
		template : '<div class="myViewPort"></div>'
	}
});

testApp.directive('menu',function(){
	return{
		restrict: 'AE',
		template:"<ul><li>hi</li></ul>",
		link: function($scope,$element,$attr){
			console.log('reached');
		}
	}
});
