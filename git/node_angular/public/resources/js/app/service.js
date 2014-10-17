inventoryApp.service('inventoryService',function($http,$q){

	this.getUserOrg = function(callback){
		 var request = $http({
                        method: "post",
                        url: "/organization"
                        /*,params: {
                            action: "add"
                        },
                        data: {
                            name: name
                        }*/
                    }).then( callback, handleError );
					
					
	}

	this.getStock = function(callback){
		var request = $http({
                        method: "post",
                        url: "/getStock"
                    }).then( callback, handleError );
	}



	//generic for all
	function handleError(response){
		console.log(response);
		alert(response.data);
	}

});