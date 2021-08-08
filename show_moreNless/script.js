{
	const articles = document.querySelectorAll('article');

	function toggleReadMore(e) {
		if(!(e.target.dataset.tag === 'button')) return;
		const button = this.querySelector('button[data-tag=button]');

		if(this.dataset.status === 'full') {
			this.dataset.status = 'less';
			button.textContent = 'Read More';
		} else if(this.dataset.status === 'less') {
			this.dataset.status = 'full';
			button.textContent = 'Read Less';
		}
	}

	function controllArticle() {
		const paras = Array.from(this.querySelectorAll('.text p'));
		let splitPara = paras.map(para => para.textContent.split(' '));
		let words = [];
		splitPara.forEach(p => p.forEach(w => words.push(w)));

		let wrapper = this.querySelector('.text');
		let less = document.createElement('div');
		let full = document.createElement('div');
		less.classList.add('less');
		full.classList.add('full');
		wrapper.innerHTML = '';

		{
			let show = 30;
			let lastCount = 0;
			splitPara.forEach(para => {
				let p;
				if(lastCount < show) {
					if((show - lastCount) < para.length) {
						p = words.splice(0, (show - lastCount));
						less.innerHTML += `<p>${p.join(' ')}...</p>`;
					} else {
						p = words.splice(0, para.length);
						less.innerHTML += `<p>${p.join(' ')}</p>`;
					}
					lastCount += para.length;
				}
			});
		}
		{
			splitPara.forEach(para => {
				full.innerHTML += `<p>${para.join(' ')}</p>`;
			});
		}
		wrapper.appendChild(less);
		wrapper.appendChild(full);
	}

	articles.forEach(article => article.addEventListener('click', toggleReadMore))
	articles.forEach(article => controllArticle.bind(article)());
}
