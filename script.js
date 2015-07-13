
$(document).ready(function() {
	$('.button').hover (function() {
		$('.shadow, .button').css('background-position', '0 -300px');
		}, 	function() {
			$('.shadow, .button').css('background-position', '');
		}
		);
	});

	$('.button').on('click', function() {
			$(this).animate({
			margin: '64px 0 0 +=4px'
		}, 200);

			$('.shadow').animate({
			margin: '70px 0 0 -=4px'
		}, 200);

			$('.nameTag').delay(400).fadeTo(100, 0.0);

			var showResume = function(){
			$('.all').css({'opacity': '1', 'z-index': '1'});

			};

			setTimeout(showResume, 500);
	});
