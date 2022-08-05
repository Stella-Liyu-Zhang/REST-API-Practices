const ELEMS = {}; //create an array called ELEMS

function queryElements() {
	// the purpose of this is to get the corresponding label of the forms
	// and put everything in ELEMS
	ELEMS.form = document.querySelector('form');
	ELEMS.id = document.querySelector('#id');
	ELEMS.title = document.querySelector('#title');
	ELEMS.author = document.querySelector('#author');
	ELEMS.method = document.querySelector('#httpMethod');
	ELEMS.output = document.querySelector('output');

	// we report error if we have trouble finding the element.
	Object.keys(ELEMS).forEach((elem) => {
		if (!ELEMS[elem]) {
			console.error(`Trouble querying ${elem} element`);
		}
	});
}

function bindEvents() {
	ELEMS.form.addEventListener('submit', async (e) => {
		//if have error, prevent from submitting
		e.preventDefault();

		let method = ELEMS.method.value;
		//if it's get or delete, we will need the "id" of the JSON Object
		if (method == 'get' || method == 'delete') {
			let url = `http://localhost:3000/posts/${ELEMS.id.value}`;
			let response = await fetch(url, { method: method });
			let data = await response.json();
			ELEMS.output.innerHTML = JSON.stringify(data, null, 2);
		} else {
			let url = 'http://localhost:3000/posts';
			if (method == 'PUT') url += `/${ELEMS.id.value}`;
			fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: ELEMS.title.value,
					author: ELEMS.author.value,
				}),
			});
		}
	});
}

function init() {
	queryElements();
	bindEvents();
}

init();
