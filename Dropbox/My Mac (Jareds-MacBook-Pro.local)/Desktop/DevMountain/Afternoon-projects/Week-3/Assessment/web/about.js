console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const duckPic = document.querySelector('#duck-img')
function duckAlert(event){
	alert('Get to the gym!')
	console.log('Get to the gym!')
}

duckPic.addEventListener('mouseover', duckAlert)