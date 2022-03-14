const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_ClASS = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
		loginForm.classList.remove(HIDDEN_ClASS);
		greeting.classList.add(HIDDEN_ClASS);
	} else {
		loginForm.classList.add(HIDDEN_ClASS);
		showGreeting(savedUsername);
	}
	
loginForm.addEventListener("submit", submitLoginForm);

function submitLoginForm(event){
	event.preventDefault();
	loginForm.classList.add(HIDDEN_ClASS);
	const username = loginInput.value;
	localStorage.setItem("USERNAME_KEY", username);
	showGreeting(username);
}

function showGreeting(username){
	greeting.innerText = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_ClASS);
}