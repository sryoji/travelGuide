var member_controller = function() {

	var data = {
		"suzuk1_r": {"name": "suzuk1_r"}
	}

	return {
		init: function() {
			$("body").on('click', '.to-detail', function(event) {
				event.preventDefault();
				console.log($(this).attr("href"));
				$("h4.modal-title").text(data[$(this).attr("href")]["name"]);
				$("#detail").modal("show");
			});
		}
	}
}();

$(document).ready(function() {
	member_controller.init();
});