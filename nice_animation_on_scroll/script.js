{
	const animElements = document.querySelectorAll('.anim');

	function showAnim(e) {
		animElements.forEach(el => {
			const animAt = window.scrollY + window.innerHeight - (el.offsetHeight / 2);
			const startPoint = el.offsetTop;

			if(animAt > startPoint) {
				el.classList.add('show');
			}
		})
	}
	showAnim();

	document.addEventListener('scroll', showAnim);
}