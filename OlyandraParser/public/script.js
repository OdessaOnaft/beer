var parserYouTube = angular.module('parser', [])
.controller('Main', function($scope){
	$scope.videos = []

	var hz = function(data, callback){
		var request = $.ajax({
			url: 'http://localhost:8888/parseYouTube/',
  			method: 'POST',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(data),
            dataType: 'json'
  		})
  		request.done(function(result, xhr){
  			if(_.isFunction(callback)) callback(null, result)
  			// if(_.isFunction(callback)) callback(result.err, result.data)
	    })
	    request.fail(function(xhr){
	    	if (_.isFunction(callback)) callback(xhr.responseJSON)
	    })
	}

	hz({}, function(err, data){
		$scope.$apply(function(){
			$scope.videos = data
		})
		
		console.log($scope.videos)
	})

})