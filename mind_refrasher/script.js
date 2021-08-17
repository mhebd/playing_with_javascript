// play media sound by clicking on button icon
{
	// Select all variables
	const buttons = document.querySelectorAll('.grid-container .icon');
	const volumes = document.querySelectorAll('.grid-container .volume');
	const medias = document.querySelectorAll('.media-container audio');
	const mediaCont = document.querySelector('.media-container');
	const gridItems = document.querySelectorAll('.ss-controller');
	const tooltip = document.querySelector('.tooltip-bg');

	// Create all functions
	function controllMedia(e) {
		const sound = mediaCont.querySelector(`audio[data-name=${this.dataset.name}]`);
		sound.loop = true;
		const status = sound.paused ? 'play' : 'pause';
		sound[status]();
	};

	function toggleVolInput(e) {
		const input = document.querySelector(`.grid-container input[data-name=${this.dataset.name}]`);
		if(!this.paused) {
			input.classList.add('active');
		} else {
			input.classList.remove('active');
		}
	};

	function volumeControll(e) {
		const sound = mediaCont.querySelector(`audio[data-name=${this.dataset.name}]`);
		sound.volume = e.target.value;
	};

	function showTooltip(e) {
		const boxInfo = this.getBoundingClientRect();
		const {width, top, left} = boxInfo;
		const text = this.dataset.info;
		tooltip.classList.add('open');
		tooltip.firstElementChild.textContent = text;
		tooltip.style.transform = `translate(${left + window.scrollX}px, ${top + window.scrollY}px)`;
	};

	function hideTooltip(e) {
		tooltip.classList.remove('open');
	}

	// Create all event listener
	buttons.forEach(button => button.addEventListener('click', controllMedia));

	medias.forEach(media => {
		media.addEventListener('play', toggleVolInput);
		media.addEventListener('pause', toggleVolInput);
	});

	volumes.forEach(volume => volume.addEventListener('change', volumeControll));

	volumes.forEach(volume => volume.addEventListener('mousemove', volumeControll));

	gridItems.forEach(item => item.addEventListener('mouseenter', showTooltip));

	gridItems.forEach(item => item.addEventListener('mouseleave', hideTooltip));
}