{
	const form = document.querySelector('.form');
	const facts = document.querySelector('.facts-wrap');
	const ENDPOINT = 'http://numbersapi.com/';

	async function getFacts(e) {
		e.preventDefault();
		const number = e.target.number.value;
		const type = e.target.type.value;
		// if(number == '' || isNaN(number)) {
		// 	alert('Enter a valid number...!');
		// 	return;
		// }
		
		try {
			const res = await fetch(`${ENDPOINT}${number}/${type}?json`);
			const data = await res.json();
			facts.textContent = data.text;
		} catch(err) {
			console.log(err);
			facts.textContent = err;
		}
	}

	form.addEventListener('submit', getFacts);
}
