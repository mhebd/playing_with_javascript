{
	function copyToClipboard(e) {
		const el = this.querySelector('textarea');
		el.select();
		document.execCommand('copy');
		alert(`You have copied this (${el.value}) color..`);
	}

	function generateColor() {
		const gridEl = document.querySelector('.grid');
		gridEl.innerHTML = '';
		for(let i = 0; i < 8; i++) {
			let color = '#';
			const item = document.createElement('div');
			item.classList.add('item');
			color = Math.random().toString(16).slice(2,8);
			item.style.backgroundColor = `#${color}`;
			item.innerHTML = `
			<textarea>#${color}</textarea>
			<span class="code">#${color}</span>`;
			item.addEventListener('click', copyToClipboard);
			gridEl.appendChild(item);
		}
	};

	generateColor();

	document.querySelector('.btn').addEventListener('click', generateColor);
}