const API_KEY = "3410a081c7217daca2e08214e4ed5444";

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

function onGeoOK(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherContainer = document.querySelector("#weather span:first-child").innerText = `${data.weather[0].main} / ${data.main.temp}`;
			const cityContainer = document.querySelector("#weather span:last-child").innerText = data.name;
			
	})	
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}



