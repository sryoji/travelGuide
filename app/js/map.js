var map_controller = function() {

	var map;

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
