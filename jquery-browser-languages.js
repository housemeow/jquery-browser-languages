(function($){
	$.browserLanguages = function(callback) {
		$.ajax({
			url: "http://ajaxhttpheaders.appspot.com",
			dataType: 'jsonp',
			success: function(headers) {
				var browserLanguages = [];
				acceptLanguage = headers['Accept-Language'];
				var splittedLanguages = acceptLanguage.split(",");
				for(var i=0; i<splittedLanguages.length; i++){
					var language = splittedLanguages[i].split(";")[0];
					browserLanguages.push(language);
				}
				callback(browserLanguages);
			}
		});
	};
})(jQuery);