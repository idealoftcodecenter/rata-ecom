document.addEventListener('DOMContentLoaded', function () {
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



    const singleProductMainSwiper = new Swiper('#single-product-main-swiper', {
        loop: false,
    });
	const singleProductThumbnailSwiper = new Swiper("#single-product-thumbnail-swiper", {
		direction: "vertical",
		slidesPerView: 4,
		spaceBetween: 20,
		mousewheel: true,
		freeMode: true,
		watchSlidesProgress: true,
	});

	document.querySelectorAll('[data-slide-index]').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            swiper.slideTo(index);
        });
    });


    document.querySelectorAll('[data-slide-index]').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            swiper.slideTo(index);
        });
    });

    const lightbox = GLightbox({
        selector: '.glightbox'
    });
	
});
