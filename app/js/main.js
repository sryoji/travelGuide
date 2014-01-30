$(document).ready(function() {
	controller.set_action();

	var c_hash = location.hash;
	if (c_hash !=  "") {
		controller.move(c_hash.substr(1));
	}
});

$(window).on("hashchange", function(){
	var c_hash = location.hash;
	console.log("hash" + c_hash);
	if (c_hash == "") {
		console.log("top");
		location.href = "";
	}else {
		controller.move(c_hash.substr(1));
	}
	//controller.move(location.hash);
});

var controller = function() {
	
	var set_view_change_handler = function() {
		$("body").on("click", "a.change-view", function(e){
			e.preventDefault();
			change_content($(this).attr("data-to"));
		});
	}

	var change_content = function(to) {
		location.hash = "#" + to;
		$.get("./" + to + ".html", function(data){
			$("#contents-area").html(data);
		});

		$("header button").addClass('collapsed');
		$("#menu").removeClass('in');
		$("#menu").addClass('collapse');
	}
	
	return {
		set_action : function() {
			set_view_change_handler();
		},
		move : function(to) {
			change_content(to);
		}
	}
}();