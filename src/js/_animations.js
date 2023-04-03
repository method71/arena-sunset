import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let reveal = () => {
	let elements = document.querySelectorAll('[data-animate="reveal"]');
	if(elements) {
		elements.forEach(el => {
			gsap.fromTo(el, {
				y: '15%',
				opacity: 0
			}, {
				opacity: 1,
				y: 0,
				duration: 2,
				scrollTrigger: {
					trigger: el,
					start: 'top center',
					toggleActions: 'play none play reverse'
				}
			}, 'text')
		});
	}
}
reveal();

let hero = () => {
	let hero_tl = gsap.timeline();

	// Infinite
	hero_tl.to(".hero__bg-clouds", {
		backgroundPositionX: -100,
		duration: 120,
		repeat: -1
	});

	// Scrolling
	hero_tl.to(".hero__bg-clouds", {
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			scrub: 3,
		},
		y: '-5vh',
	});

	hero_tl.to(".hero__bg-front", {
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'center top',
			scrub: 1,
			pin: true,
		},
		marginTop: '-20vh',
	});
}
hero();

let inner = () => {
	let inner_tl = gsap.timeline();

	inner_tl.fromTo(".inner__image", {
		opacity: 0
	}, {
		scrollTrigger: {
			trigger: '.inner__image',
			start: 'top bottom',
			end: 'center bottom',
			scrub: 5,
		},
		opacity: 1,
	});

	inner_tl.fromTo(".inner__prospect", {
		scale: 1.5
	}, {
		scrollTrigger: {
			trigger: '.inner__image',
			start: 'top bottom',
			end: 'bottom bottom',
			scrub: 3,
		},
		scale: 1,
	});

	inner_tl.fromTo(".inner__markers", {
		y: '10%',
		opacity: 0.5
	}, {
		scrollTrigger: {
			trigger: '.inner__image',
			start: 'center bottom',
			end: 'center center',
			scrub: 3,
		},
		y: 0,
		opacity: 1
	});
}
inner();