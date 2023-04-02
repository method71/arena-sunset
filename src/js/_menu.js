let wrap = document.querySelector('.menu-wrap'),
	toggle = document.querySelector('.header__button--menu'),
	menu = document.querySelector('.menu');

toggle.addEventListener('click', (e) => {
	wrap.classList.toggle('enabled');
});

document.addEventListener('click', (e) => {
	if(wrap.classList.contains('enabled') && !wrap.contains(e.target)) wrap.classList.remove('enabled');
});

menu.addEventListener('click', (e) => {
	wrap.classList.remove('enabled');
});