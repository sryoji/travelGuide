var member_controller = function() {

	var data = {
		"suzuk1_r": {"name": "suzuk1_r", "text": "しおり作った人"},
		"miz": {"name" : "Miz", "text": "我らが幹事様"},
		"midsubmarine": {"name" : "あいだ", "text": "ぶらんでー"},
		"gagaladynikov": {"name" : "朦朧おばさん", "text": "ファッションくず"},
		"reitoRac": {"name" : "レイト", "text": "大阪人"},
		"esui3an": {"name" : "えすい", "text": "sa紅一点"},
		"tama_nya": {"name" : "わーお", "text": "大地に試されてきた人"},
		"methariol": {"name" : "めた", "text": "スポンサー"},
		"nmtn": {"name" : "Nemo", "text": "匍匐前進"},
		"taka_span": {"name" : "マツド", "text": "アル中"},
		"mtk_b0t": {"name" : "motoKP", "text": "げすい人"},
		"moroto": {"name" : "もろと", "text": "スノボ組幹事さま"}
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