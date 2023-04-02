import Swiper from "swiper";

let filter = document.querySelector('.appartments__filter');

if(filter) {
	let appartments = document.querySelectorAll('.appartment'),
		inputs = filter.querySelectorAll('input');

	let getValues = () => {
		let res = [];

		inputs.forEach(input => {
			if(input.checked) res.push(input.value);
		});

		return res;
	}

	let doFilter = (values = []) => {
		const event = new Event("filter");

		appartments.forEach(app => {
			if(values.length && !values.includes(app.dataset.rooms)) {
				app.style.display = 'none';
			} else {
				app.style.display = '';
			}
		});

		document.dispatchEvent(event);
	}

	inputs.forEach(input => {
		input.addEventListener('change', e => {
			doFilter(getValues());
		});
	})
}