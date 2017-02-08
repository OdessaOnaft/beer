angular.module("app")
  .controller("sanseyController", ($scope, $rootScope, $state, $translate, $http, $window)=>{



  	// request({
  	// 	method: "get",
  	// 	url: 'https://catalog.api.2gis.ru/2.0/catalog/marker/search?page=1&page_size=10000&q=%D1%88%D0%BA%D0%BE%D0%BB%D0%B0&hash=3f7897d40bef23b5&region_id=14&key=ruczoy17',
  	// 	headers: {
		 //    'Cookie': '_2gis_webapi_session=9b9d9207-3af5-45d3-8288-e9c0ebf87f73; _2gis_webapi_user=7b24a4be-b534-4d16-be84-e4bacd9cb74f'
		 //  }
  	// }, (body,response)=>{
  	// 	console.log(body,response)
  	// })
  	$scope.data = []
  	$scope.obj = {}
  	$scope.markers = []
  	$window.s = $scope
  	$scope.search = ()=>{
  		$http({
		  method: 'GET',
		  url: "http://nominatim.openstreetmap.org/search/?city="+$scope.obj.city+"&format=json&addressdetails=1&limit="+limit
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available

		    console.log(response)
		    $scope.data = response.data
		    if(!$scope.data.length) return;
		    _.each($scope.markers, v=>{
		    	map.removeLayer(v)
		    })
		    map.panTo(new L.LatLng($scope.data[0].lat, $scope.data[0].lon));
		    _.each($scope.data, v=>{
		    	console.log(Math.floor(Math.random()*235234234))
		    	$scope.markers.push(L.marker([v.lat, v.lon]).addTo(map)
				    .bindPopup(v.display_name)
				    .openPopup()
				)
		    })
		    
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
  	}
  	var limit = 25
  	

		$http({
		  method: 'get',
		  url: "http://vesti-ukr.com/",
		  
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log(response)
		  
		    
		  }, function errorCallback(response) {
		  	console.log("err", response)
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	var map = L.map('map-demo').setView([46.4846583, 30.732564], 13);

	L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	

	
  })