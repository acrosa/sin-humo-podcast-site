function go() {
	$('.show-notes').on('click', function (event) {
		let anchor = event.target;
		$(anchor).next('.notes').toggle();
		$(anchor).toggleClass('shown');
		// so it doesn't "jump" to the top of the page.
		event.preventDefault();
	});
}

console.warn('WARNING: you should follow us on twitter: @sinhumopodcast :)')
$(document).ready(go);