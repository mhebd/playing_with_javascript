// Simple rich text editor SCRIPTs
// Write article section

const ctnr = textContainer.document; // ctnr = container
const body = ctnr.getElementsByTagName('body')[0];
let showCode = true;
let editMode = true;

const enableInitialEditMode = () => {
	ctnr.designMode = "on";
};

const execCmd = (command) => {
	ctnr.execCommand(command, false, null);
	body.focus();
}

const execCmdArg = (command, arg) => {
	ctnr.execCommand(command, false, arg);
	body.focus();
};

const toggleCode = () => {
	if(showCode) {
		body.textContent = body.innerHTML;
		showCode = false;
	} else {
		body.innerHTML = body.textContent;
		showCode = true;
	}
};

const toggleEdit = () => {
	if(editMode) {
		ctnr.designMode = 'off';
		editMode = false;
	} else {
		ctnr.designMode = 'on';
		editMode = true;
	}
}



// Display article section

const subBtn = document.querySelector('.create-post-btn');
const postCtnr = document.getElementById('post-container');

subBtn.addEventListener('click', () => {
	if(body.innerHTML !== '') {
		postCtnr.innerHTML = body.innerHTML;
		alert(`Your article is visible now.`)
	} else {
		alert(`Please, write a article first!`);
	}
})