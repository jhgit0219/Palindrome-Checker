// JavaScript Document

const input_element = document.querySelector('#text-input');
const check_button = document.querySelector('#check-btn');
const result_element = document.querySelector('#result');

check_button.addEventListener('click', () =>{
	palindrome_checker(input_element.value);
	check_button.value = "";
});

input_element.addEventListener('keydown', e =>{
	if(e.key === 'Enter'){
		palindrome_checker(input_element.value);
		check_button.value="";
	}
});

function palindrome_checker(text){
	
	const origText = text;
	
	if(text === ''){
		alert('Please input a value');
		return;
	}
	
	result_element.replaceChildren();
	const result_lower_case = text.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
	let result_msg = `<strong>${origText}</strong> ${
		result_lower_case === [...result_lower_case].reverse().join('') ? 'is' : 'is not'
	} a palindrome.`;
	
	const resTag = document.createElement('p');
	resTag.className = 'text-input';
	resTag.innerHTML = result_msg;
	result_element.appendChild(resTag);
	
	result_element.classList.remove('hidden');
	
}