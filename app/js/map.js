var map_controller = function() {

	var map;

	// 地図の中心を移動する
	var chageCenter = function(_point) {
		map.panTo(new google.maps.LatLng(39, 39));
	}

	// 地図上にマーカーを置く
	var setMarker = function(_point) {
		var opts = {
			position: new google.maps.LatLng(),
			map: map,
			title: ""
		}
		var marker = new google.maps.Marker();
		google.maps.event.addListener(marker, 'click', function(){
			// 吹きだしを表示
		});
	}

	var moveTo = function(_to) {
		// 地図を移動

		// 吹きだしを表示
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
		}
	}
}();

$(document).ready(function() {
	map_controller.init();
});
