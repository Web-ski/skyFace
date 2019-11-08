document.addEventListener('DOMContentLoaded', function (event) {

	const face = document.getElementsByTagName('img');
	const btn = document.getElementsByTagName('button')[0];

	[].forEach.call(face, function (item) {
		item.addEventListener('click', function () {

			const check1 = face[0].hasAttribute('style');
			const check2 = face[1].hasAttribute('style');
			const check3 = face[2].hasAttribute('style');

			if ((check1 || check2 || check3) === true) {
			} else {
				item.setAttribute('style', 'border');
				item.style.border = 'solid 6px violet';
			};
		});
	});

	btn.addEventListener('click', function () {

		[].forEach.call(face, function (item) {
			if (item.hasAttribute('style')) {
				item.removeAttribute('style');
			}
		});
	});
});