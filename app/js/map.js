var map_controller = function() {

	var map;
	var data;
	var my_marker = null;
	var marker_list = null;
	var infowin = null;

	// 地図の中心を移動する
	var chageCenter = function(_point) {
		map.panTo(new google.maps.LatLng(39, 39));
	}

	var setMarkers = function(_points) {
		if (marker_list == null) {
			marker_list = new google.maps.MVCArray();			
		}else {
			clearMarker();
		}

		for (var i = 0; i < _points.length; i++) {
			setMarker(_points[i]);
		};
	}

	// 地図上にマーカーを置く
	var setMarker = function(_point) {
		var req = {"address": _point.address};

		var opts = {
			position: new google.maps.LatLng(_point.latitude, _point.longitude),
			map: map,
			title: "<a href=\"" + _point.url + "\"><strong>"+ _point.name + "</strong><p>" + _point.text + "</p></a>"
		}
		var marker = new google.maps.Marker(opts);
		marker_list.push(marker);
		google.maps.event.addListener(marker, 'click', function(){
			// 移動
			map.panTo(marker.getPosition());
			
			// 吹き出し表示
			infowin = new google.maps.InfoWindow({
				position: marker.getPosition(),
				content: marker.getTitle()
			});
			infowin.open(map);
		});
	}

	var clearMarker = function() {
		marker_list.forEach(function(marker, index){
			marker.setMap(null);
		});
	}

	var setCurrentPosition = function() {

		if(my_marker != null) {
			my_marker.setMap(null);
		}

		navigator.geolocation.getCurrentPosition(
			function(posi) {
				var posi = new google.maps.LatLng(posi.coords.latitude, posi.coords.longitude)
				map.panTo(posi);
				map.setZoom(15);

				var opts = {
					position: posi,
					map: map,
					icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|3276b1|000000'
				}
				my_marker = new google.maps.Marker(opts);

				},
				function(error) {
					console.log(error);
				}
		);
	}


	return {
		init: function() {
			var latlng = new google.maps.LatLng(39,138);
			var opts = {
				zoom: 6,
				mayTypeId: google.maps.MapTypeId.ROADMAP,
				center: latlng
			};

			map = new google.maps.Map($("#map").get(0), opts);
			setCurrentPosition();

			$.getJSON('./data/map_data.json', function(json) {
				data = json;
			});

			$("body").on('click', '.dropdown-menu li a', function(event) {
				event.preventDefault();
				setMarkers(data[$(this).attr('href')]);
			});

			$("#current").on('click', function(event) {
				event.preventDefault();
				setCurrentPosition();
			});
		},
		
		test: function() {
			clearMarker();
		}
	}
}();