$(document).ready(function(){
	$('.section5Container__itemsContainer').slick({
		  arrows: false,
		  speed: 500,
		  infinite: false,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true,
		  autoplay: true,
		  autoplaySpeed: 1500,
		  dots: true,
	});
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 700,   // по умолчанию «400» 
        easing: "swing" // по умолчанию «swing» 
    });

    return false;
});


window.addEventListener('scroll', e => {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});