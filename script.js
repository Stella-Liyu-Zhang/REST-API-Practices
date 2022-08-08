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
			//for instance, http://localhost:3000/posts/delete
			let url = `http://localhost:3000/posts/${ELEMS.id.value}`;
			let response = await fetch(url, { method: method });
			let data = await response.json();
			ELEMS.output.innerHTML = JSON.stringify(data, null, 2);
		} else {
			let url = 'http://localhost:3000/posts';
			if (method == 'put') url += `/${ELEMS.id.value}`;
			let response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: ELEMS.id.value,
					title: ELEMS.title.value,
					author: ELEMS.author.value,
				}),
			});
			let data = await response.json();
			ELEMS.output.innerHTML = JSON.stringify(data, null, 2);
		}
	});
}

function toggle_visibility() {
	// $('#httpMethod').on('change', function() {
	// 	if($.trim(this.value) === 'get' || $.trim(this.value) === 'delete'){
	// 		$('#title').val('').prop('disabled', true).closest('p').hide();
	// 		$('#author').val('').prop('disabled', true).closest('p').hide();
	// 	}else{
	// 		$('#title').prop('disabled', false).closest('p').show();
	// 		$('#author').prop('disabled', false).closest('p').show();
	// 	}
	// });

	ELEMS.method.addEventListener('change', () => {
		if (ELEMS.method.value === 'get' || ELEMS.method.value === 'delete') {
			ELEMS.id.removeAttribute('disabled');
			ELEMS.title.setAttribute('disabled', true);
			ELEMS.author.setAttribute('disabled', true);
		} else if (ELEMS.method.value === 'post') {
			ELEMS.id.setAttribute('disabled', true);
			ELEMS.title.removeAttribute('disabled');
			ELEMS.author.removeAttribute('disabled');
		} else {
			ELEMS.id.removeAttribute('disabled');
			ELEMS.title.removeAttribute('disabled');
			ELEMS.author.removeAttribute('disabled');
		}
	});
}


function init() {
	queryElements();
	bindEvents();
	toggle_visibility();
}

init();
