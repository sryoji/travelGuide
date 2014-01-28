var member_controller = function() {

	var data = {
		"suzuk1_r": {"name": "suzuk1_r", "text": "サブ幹事"}
	}

	return {
		init: function() {
			$("body").on('click', '.to-detail', function(event) {
				event.preventDefault();
				console.log($(this).attr("href"));
				var detail = $("#detail");
				detail.find('h4').text(data[$(this).attr("href")]["name"]);
				detail.find('.modal-body').text(data[$(this).attr("href")]["text"]);
				detail.modal("show");
			});
		}
	}
}();

$(document).ready(function() {
	member_controller.init();
});