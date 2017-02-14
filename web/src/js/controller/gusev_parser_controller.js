angular.module("app")
  .controller("gusevParser", ($scope, $rootScope, $state, $translate, $http, $window)=>{
    $http({
		  method: 'get',
		  url: "http://www.carnage.ru/",
		  
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(response)
		  
		    
		  }, function errorCallback(response) {
		  	console.log("err", response)
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
  })