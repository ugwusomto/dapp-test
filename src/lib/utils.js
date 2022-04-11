export const isEmpty = (data) => {
	return (
		!data ||
		data.length === 0 ||
		typeof data == 'undefined' ||
		data == null ||
		Object.keys(data).length == 0
	);
};

/**
 * @desc sweet alert message box
 * @param duration --- time for the message box to be displayed
 * @param type --- success , error , info
 * @param message --- The message to show
 */
export const alertMessage = ({ duration, message, type, position }) => {
	Swal.fire({
		position: position ? position : 'top-end',
		icon: type ? type : 'info',
		title: message ? message : '',
		showConfirmButton: false,
		timer: duration ? duration : 3000
	});
};

export const truncateString = (str, num) => {
if(!str) return;
	if (str.length > num) {
		return str.slice(0, num) + '...';
	} else {
		return str;
	}
};
