angular.module("app")
  .controller("ilievmapController", ($scope, $rootScope, $state, $translate, $http, $window)=>{


	var map = L.map('map').setView([48.665571, 30.498047], 6);

	L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


		var odessa = new L.LatLng(46.468281, 30.740883);
		var kyiv = new L.LatLng(50.441764, 30.528259);

		var A = L.marker(kyiv, {draggable: true}).addTo(map);
		var B = L.marker(odessa, {draggable: true}).addTo(map).bindPopup("Потяни меня").openPopup();

		var Geodesic = L.geodesic([[A.getLatLng(), B.getLatLng()]], {
			weight: 7,
			opacity: 0.5,
			color: 'blue',
			steps: 50
		}).addTo(map);

		var info = L.control();

		info.onAdd = function (map) {
		    this._div = L.DomUtil.create('div', 'info');
		    this.update();
		    return this._div;
		};

		info.update = function (props) {
		    this._div.innerHTML = '<h4>Distance</h4>' +  (props ? (props.distance>10000)?(props.distance/1000).toFixed(0)+' km':(props.distance).toFixed(0)+' m' : 'invalid');
		};
		info.addTo(map);

		Geodesic.update = function () {
		  Geodesic.setLatLngs([[A.getLatLng(), B.getLatLng()]]);
		  info.update(Geodesic._vincenty_inverse(A.getLatLng(), B.getLatLng()));
		};

		Geodesic.update();

		A.on('drag', Geodesic.update);
		B.on('drag', Geodesic.update);
  })
