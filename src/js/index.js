import './_animations';
import './_slider';
import './_modal';
import './_menu';
import './_form';
import './_filter';

window.addEventListener('DOMContentLoaded', (e) => {
	let scrollby = 200;

	if(document.body.scrollTop < scrollby) {
		window.scroll({
			top: scrollby,
			behavior: 'smooth'
		});
	}
});