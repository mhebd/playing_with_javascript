const cursor = document.querySelector('.cursor');
let cursorTop, x, y;

function moveCursor(e) {
	x = e.pageX;
	y = e.pageY;
	cursor.style.transform = `translate(${x-15}px, ${y-15}px)`;
	cursorTop = e.pageY - scrollY;
};

function moveCursorOnScroll(e) {
	cursor.style.transform = `translate(${x-15}px, ${(cursorTop + scrollY)-15}px)`;
}

window.addEventListener('mousemove', moveCursor);
window.addEventListener('scroll', moveCursorOnScroll);
window.addEventListener('mousedown', () => {
	if(cursor.classList.contains('click')) {
		cursor.classList.remove('click');
		void cursor.offsetTop;
		cursor.classList.add('click');
	} else {
		cursor.classList.add('click');
	}
});