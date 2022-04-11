export const HandleModal = (id) => {
	const $ = jq;
	if (id == 'WalletModal' && $('#buymodal').css('display') == 'block') {
		$(`#buymodal`).slideToggle();
	}
	$(`#${id}`).slideToggle();
	// console.log(x);
	// const modal = document.getElementById(id);
	// console.log(modal);
	// if (modal.classList.contains('modal-isactive')) {
	// 	modal.classList.remove('modal-isactive', 'animate-modal');
	// 	return;
	// }
	// modal.classList.add('modal-isactive', 'animate-modal');
};
