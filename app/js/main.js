$(document).ready(function() {
	controller.set_action();
});

var controller = function() {
	
	var set_view_change_handler = function() {
		$("body").on("click", "a.change-view", function(e){
			e.preventDefault();
			var content = get_content($(this).attr("data-to"));
			console.log(content);
		});
	}

	var get_content = function(to) {
		var result;
		$.get("./" + to + ".html", function(data){resulst = data});
		return result;
	}
	
	return {
		set_action : function() {
			set_view_change_handler();
		}
	}
}();