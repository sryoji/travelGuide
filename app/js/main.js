$(document).ready(function() {
	controller.set_action();
});

var controller = function() {
	
	var set_view_change_handler = function() {
		$("body").on("click", "a.change-view", function(e){
			e.preventDefault();
			get_content($(this).attr("data-to"));
		});
	}

	var get_content = function(to) {
		$.get("./" + to + ".html", function(data){console.log(data)});
	}
	
	return {
		set_action : function() {
			set_view_change_handler();
		}
	}
}();