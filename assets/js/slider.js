// Slider 
$('.feature__slider').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows: true,
	autoplay: true,
	responsive: [
		{
			breakpoint: 1220,
			settings: {
        arrows: false
			}
		},
    {
			breakpoint: 1024,
			settings: {
        arrows: false
			}
		},
		{
			breakpoint: 667,
			settings: {
				slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
			}
		}
	]
});