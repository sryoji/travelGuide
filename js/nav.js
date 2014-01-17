var Nav = function(ul_obj) {
	this.ul = ul_obj;
};

Nav.prototype.setAction = function () {
	var lis = this.ul.children('li');
	lis.each(function(index, el) {
		$(el).on('click', function(event) {
			//event.preventDefault();
			/* Act on the event */
			lis.each(function(index, el) {
				$(el).removeClass('active');
			});
			$(this).addClass('active');
		});
	});
};