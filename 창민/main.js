// $('.hamburger-button').click(function(ev){
//    ev.preventDefault();
//    $(this).toggleClass('active');
// })

$(function() {
	$('.hamburger-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
    $('.overlay').toggleClass('visible');

	});
});