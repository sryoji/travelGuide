$(document).ready(function() {
	controller.set_action();
});

var controller = function() {
	
	var set_view_change_handler = function() {
		$("body").on("click", "a.change-view", function(e){
			e.preventDefault();
			change_content($(this).attr("data-to"));
		});
	}

	var change_content = function(to) {
		$.get("./" + to + ".html", function(data){
			$("#contents-area").html(data);
		});
	}
	
	return {
		set_action : function() {
			set_view_change_handler();
		}
	}
}();