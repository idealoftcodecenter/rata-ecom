document.querySelectorAll('.product-gallery').forEach((gallery, index) => {
	const swiper = new Swiper(gallery.querySelector('.swiper'), {
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 200,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true
		},
		speed: 500,
	});

	swiper.autoplay.stop(); // pause initially

	gallery.addEventListener('mouseenter', () => swiper.autoplay.start());
	gallery.addEventListener('mouseleave', () => {
		swiper.autoplay.stop();
		swiper.slideTo(0); // return to first image
	});
});