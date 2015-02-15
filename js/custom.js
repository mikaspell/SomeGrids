$(function() {

	var scrollAside = $('header').innerHeight();

	$(window).scroll(function(){

		if( $(this).scrollTop() >= scrollAside ) {

			$('.project-info').addClass('js-scrolledMenu');
		} else {

			$('.project-info').removeClass('js-scrolledMenu');
		}
	});
});