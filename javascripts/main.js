// console.log('This would be the main JS file.');
$(function() {
	var scrollAside = $('header').innerHeight();

	$(window).scroll(function(){

		if( $(this).scrollTop() >= scrollAside ) {

			$('#sidebar').addClass('js-scrolledMenu');
		} else {

			$('#sidebar').removeClass('js-scrolledMenu');
		}
	})
})
