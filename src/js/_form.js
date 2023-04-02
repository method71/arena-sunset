import Toastify from 'toastify-js';

// Phone mask
(()=>{
	const inputs = document.querySelectorAll("input[type=tel]");

	const prefixNumber = (str) => {
	  if (str === "7") {
		return "7 (";
	  }
	  if (str === "8") {
		return "8 (";
	  }
	  if (str === "9") {
		return "7 (9";
	  }
	  return "7 (";
	};
	
	if(inputs) {
		inputs.forEach(input => {
			input.addEventListener("input", (e) => {
				const value = input.value.replace(/\D+/g, "");
				const numberLength = 11;
			
				let result;
				if (input.value.includes("+8") || input.value[0] === "8") {
					result = "";
				} else {
					result = "+";
				}
			
				for (let i = 0; i < value.length && i < numberLength; i++) {
					switch (i) {
						case 0:
							result += prefixNumber(value[i]);
						continue;
						case 4:
							result += ") ";
						break;
						case 7:
							result += "-";
						break;
						case 9:
							result += "-";
						break;
						default:
						break;
					}
					result += value[i];
				}
			
				input.value = result;
			});
		})
	}
})();

// Submit
(()=>{
	let forms = document.querySelectorAll('form');

	if(forms) {
		forms.forEach(form => {
			form.addEventListener('submit', e => {
				Toastify({
					text: "Отправка",
					duration: 5000,
					gravity: "top",
					position: "center",
					stopOnFocus: true,
				  }).showToast();

				Toastify({
					text: "Заявка отправлена",
					duration: 5000,
					gravity: "top",
					position: "center",
					stopOnFocus: true,
					className: 'positive',
				  }).showToast();

				  Toastify({
					text: "Произошла ошибка",
					duration: 5000,
					gravity: "top",
					position: "center",
					stopOnFocus: true,
					className: 'negative',
				  }).showToast();

				  form.reset();

				  e.preventDefault();
				  e.stopPropagation();
				  return false;
			});
		});
	}
})();