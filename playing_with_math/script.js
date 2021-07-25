// Odd number section
(function() {
	const container = document.getElementById('odd_res_container');
	const btn = document.getElementById('odd_res_btn');

	btn.addEventListener('click', ()=> {
		btn.classList.add('d-none');
		container.innerHTML = '';
		for(let i = 1; i <= 1000; i++) {
			if(i%2 !== 0) {
				container.innerHTML += `<div class="res-item col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
					<div class="bg-light text-secondary text-center">${i}</div>
				</div>`
			}
		}
	});
})();


// Even number section
(function() {
	const container = document.getElementById('even_res_container');
	const btn = document.getElementById('even_res_btn');

	btn.addEventListener('click', ()=> {
		btn.classList.add('d-none');
		container.innerHTML = '';
		for(let i = 1; i <= 1000; i++) {
			if(i%2 === 0) {
				container.innerHTML += `<div class="res-item col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
					<div class="bg-light text-secondary text-center">${i}</div>
				</div>`
			}
		}
	});
})();


// Prime number section
(function() {
	const container = document.getElementById('prime_res_container');
	const btn = document.getElementById('prime_res_btn');

	btn.addEventListener('click', ()=> {
		btn.classList.add('d-none');
		container.innerHTML = '';
		for(let i = 1; i <= 1000; i++) {
			let prime = true;
			for(let j = 2; j < i; j++) {
				if(i%j === 0) {
					prime = false;
				};
			}

			if(prime) {
				container.innerHTML += `<div class="res-item col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
					<div class="bg-light text-secondary text-center">${i}</div>
				</div>`
			}
		}
	});
})();


// Lo-sa-gu section
(function() {
	const container = document.getElementById('lsg_res_container');
	const btn = document.getElementById('lsg_btn');

	btn.addEventListener('click', ()=> {
		const num = document.getElementById('lsg_input').value;
		container.innerHTML = '';
		if(num === '') {
			alert('Please Input a valid number..!')
		} else {
			for(let i = 1; i <= 100; i++) {
				container.innerHTML += `<div class="res-item col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
					<div class="bg-light text-secondary text-center">
						<div>${num} * ${i}</div>
						<div> =${i*num}</div>
					</div>
				</div>`
			}
		}
	});
})();


// Go-sa-gu section
(function() {
	const container = document.getElementById('gsg_res_container');
	const btn = document.getElementById('gsg_btn');

	btn.addEventListener('click', ()=> {
		const num = document.getElementById('gsg_input').value;
		container.innerHTML = '';
		if(num === '') {
			alert('Please Input a valid number..!')
		} else {
			for(let i = 1; i <= num; i++) {
				if(num%i === 0) {
					container.innerHTML += `<div class="res-item col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
						<div class="bg-light text-secondary text-center">${i}</div>
					</div>`
				}
			}
		}
	});
})();


// Least common multiplier section
(function() {
	const resContainer = document.getElementById('lcm_res_container');
	const numContainer = document.getElementById('lcm_num_container');
	const addBtn = document.getElementById('lcm_num_add_btn');
	const resBtn = document.getElementById('lcm_res_btn');
	let numArr = [];
	let multiplierArr = [];

	addBtn.addEventListener('click', ()=> {
		const num = document.getElementById('lcm_input');
		if(num.value === '') {
			alert('Please Input a valid number..!')
		} else {
			numArr.push(num.value);
			num.value= '';
			numContainer.innerHTML = numArr.map(n => `<sapn class="ml-2">${n}</sapn>`);
		}
	});

	resBtn.addEventListener('click', () => {
		if(numArr.length < 2) {
			alert('Please Input al least 2 number..')
		} else {
			let resArr = [];
			numArr.forEach(num => {
				let multipliers = [];
				for(let i = 1; i <= 10000; i++) {
					multipliers.push(i*num);
				};
				multiplierArr.push(multipliers);
			});

			multiplierArr[0].forEach(mNum => {
				let isCommon = true;
				multiplierArr.forEach(mNumArr => {
					if(!mNumArr.includes(mNum)) isCommon = false;
				});

				if(isCommon) {
					resArr.push(mNum);
				}
			});

			resContainer.innerHTML = `<div class="bg-light p-2 mx-auto mt-5">Your Least Common Multiplier Is : ${resArr[0]}</div>`
		}
	});
})();



// Highest common factor section
(function() {
	const resContainer = document.getElementById('hcf_res_container');
	const numContainer = document.getElementById('hcf_num_container');
	const addBtn = document.getElementById('hcf_num_add_btn');
	const resBtn = document.getElementById('hcf_res_btn');
	let numArr = [];
	let multiplierArr = [];

	addBtn.addEventListener('click', ()=> {
		const num = document.getElementById('hcf_input');
		if(num.value === '') {
			alert('Please Input a valid number..!')
		} else {
			numArr.push(num.value);
			num.value= '';
			numContainer.innerHTML = numArr.map(n => `<sapn class="ml-2">${n}</sapn>`);
		}
	});

	resBtn.addEventListener('click', () => {
		if(numArr.length < 2) {
			alert('Please Input al least 2 number..')
		} else {
			let resArr = [];
			numArr.forEach(num => {
				let multipliers = [];
				for(let i = 1; i <= num; i++) {
					if(num % i === 0) multipliers.push(i);
				};
				multiplierArr.push(multipliers);
			});

			multiplierArr[0].forEach(mNum => {
				let isCommon = true;
				multiplierArr.forEach(mNumArr => {
					if(!mNumArr.includes(mNum)) isCommon = false;
				});

				if(isCommon) {
					resArr.push(mNum);
				}
			});

			resContainer.innerHTML = `<div class="bg-light p-2 mx-auto mt-5">Your Highest Common Factor Is : ${resArr[resArr.length - 1]}</div>`
		}
	});
})();
