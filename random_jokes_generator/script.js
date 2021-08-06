{
	document.querySelector('.switcher').addEventListener('click', function(e) {
			if(e.target.checked) {
				document.body.setAttribute('data-theme', 'dark');
			} else {
				document.body.setAttribute('data-theme', 'light')
			}
		});
}

{
	const jokesCont = document.querySelector('.card .jokes');
	const btn = document.querySelector('.card button');
	const ENDPOINT = 'https://icanhazdadjoke.com/';

	async function getJokes() {
		const res = await fetch(ENDPOINT, {
			headers: {
				'accept': 'application/json'
			}
		});
		const data = await res.json();
		jokesCont.textContent = data.joke;
	}

	btn.addEventListener('click', getJokes);
	getJokes();
}