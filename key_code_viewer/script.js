
(function() {
	const keyCodeCont = document.getElementById('key_code');
	const keyCont = document.getElementById('key');

	document.addEventListener('keydown', e => {
		keyCodeCont.textContent = e.keyCode;
		keyCont.textContent = e.key === ' ' ? 'space' : e.key;
	});
})();