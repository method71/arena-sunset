import GLightbox from 'glightbox';
import MicroModal from 'micromodal';

const lightbox = GLightbox({
	selector: 'data-lightbox',
	skin: 'light',
	videosWidth: '90%',
	width: '90vw'
});

MicroModal.init({
	openTrigger: 'data-modal-open',
	closeTrigger: 'data-modal-close',
	disableScroll: true,
	openClass: 'modal--shown',
});