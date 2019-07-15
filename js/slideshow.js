var main = function() {

	var paused = false
	
	setInterval(function() {
		if (paused === false) { 
			$('#slide_show > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slide_show');
		};
	},  5000);
   
	
};

$(document).ready(main);