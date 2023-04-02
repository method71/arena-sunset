import Swiper, { Scrollbar, FreeMode } from "swiper";

let sections = ['.appartments__pan', '.progress__pan']

sections.forEach(section => {
	let swiper = new Swiper(section, {
		modules: [Scrollbar, FreeMode],
		freeMode: {
			enabled: true,
			sticky: false,
		},
		grabCursor: true,
		slidesPerView: 'auto',
		scrollbar: {
			enabled: true,
			el: '.swiper-scrollbar',
			draggable: true,
			hide: false,
		},
	});

	document.addEventListener('filter', e => {
		swiper.update();
	})
});