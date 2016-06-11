;
(function($, window, document, undefined) {
	$.fn.dropBox = function(opts) {
		var defaults = {
			"eventType": "click",
			"n": 0,
			"speed": 500
		}
		var options = $.extend({}, defaults, opts);
		var that = this;
		for (var i = 0, len = that.find("ul li").length; i < len; i++) {
			that.find("ul li").eq(i).prop("value", options.n);
			options.n++;
		};
		that.on(options.eventType, function() {
			that.find("ul").stop().slideUp(100);
			that.find("ul").stop().slideToggle(options.speed);
		}).on("click", "li", function() {
			var _this = $(this),
				thisText = _this.text(),
				thisVal = _this.prop("value");
			that.find("input").val(thisText).prop("name", thisVal).attr("value", thisText);
		});
	}
})(jQuery, window, document)