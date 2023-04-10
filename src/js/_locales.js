import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next
.use(Backend)
.init({
	lng: 'ru',
    backend: {
		loadPath: '{{lng}}.json'
	},
}, function(err, t) {
	updateContent();
});

function updateContent() {
	let strings = document.querySelectorAll('[data-string]');
	let localBlocks = document.querySelectorAll('[data-locale]');

	if(strings) {
		strings.forEach(string => {
			if (string.getAttribute('placeholder')) {
				string.placeholder = i18next.t(string.dataset.string);
			} else {
				string.innerHTML = i18next.t(string.dataset.string);
			}
		});
	}

	if(localBlocks) {
		localBlocks.forEach(block => {
			block.style.display = block.dataset.locale == i18next.language ? "" : "none";
		});
	}
}
i18next.on('languageChanged', () => {
	updateContent();
});

let toggles = document.querySelectorAll('[data-change-lng]');
if(toggles) {
	toggles.forEach(toggle => {
		toggle.addEventListener('click', e => {
			i18next.changeLanguage(toggle.dataset.changeLng);
		});
	})
}

