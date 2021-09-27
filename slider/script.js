{
	const slides = document.querySelectorAll('.slide');
	const dots = document.querySelectorAll('.dot');
	const sLength = slides.length;
	let idx;

	slides.forEach((s , i) => {
		if(!s.classList.contains('active')) return;
		idx = i;
	});

	dots[idx].classList.add('active');

	const next = document.querySelector('.next');
	const prev = document.querySelector('.prev');


	function nextSlide(e) {
		slides[idx].style.transition = 'left .3s ease-out';
		dots[idx].classList.remove('active');
		if(idx === sLength - 1) idx = -1;
		slides[idx + 1].style.left = '100%';
		dots[idx + 1].classList.add('active');
		slides[idx + 1].style.transition = 'left .3s ease-out';
		setTimeout(() => {
			if(idx === -1) {
				slides[sLength - 1].style.left = '-100%';
			} else {
				slides[idx].style.left = '-100%';
			}
			slides[idx + 1].style.left = '0';
			slides[idx + 1].classList.add('active');
			idx++;
		}, 5);
	};



	function prevSlide(e) {
		slides[idx].style.transition = 'all .3s ease-out';
		dots[idx].classList.remove('active');
		if(idx === 0) idx = sLength;
		slides[idx - 1].style.left = '-100%';
		dots[idx - 1].classList.add('active');
		slides[idx - 1].style.transition = 'left .3s ease-out';
		setTimeout(() => {
			if(idx === sLength) {
				slides[0].style.left = '100%';
			} else {
				slides[idx].style.left = '100%';
			}
			slides[idx - 1].style.left = '0';
			slides[idx - 1].classList.add('active');
			idx--;
		}, 5);
	};




	dots.forEach((dot, i) => {
		dot.addEventListener('click', function(e) {
			slides[idx].style.transition = 'all .3s ease-out';
			dots[idx].classList.remove('active');

			if(i < idx) {
				slides[i].style.left = '-100%';
			} else {
				slides[i].style.left = '100%';
			}
			dots[i].classList.add('active');
			slides[i].style.transition = 'left .3s ease-out';

			setTimeout(() => {
				if(i < idx) {
					slides[idx].style.left = '100%';
				} else {
					slides[idx].style.left = '-100%';
				}
				slides[i].style.left = '0';
				slides[i].classList.add('active');
				idx = i;
			}, 5);
		});
	});


	document.addEventListener('transitionend', function(e) {
		slides.forEach((slide, i) => {
			slide.setAttribute('style', '');
			if(i !== idx) {
				slide.classList.remove('active');
			}
		})
	});


	next.addEventListener('click', nextSlide);
	prev.addEventListener('click', prevSlide);

	setInterval(nextSlide, 3000);
}