const backgroundURLs = ["./img/cafe_work.jpg", "./img/coffee_beans.jpg"];

const URLIndex = Math.floor(Math.random() * backgroundURLs.length);
const todayBackgroundURL = backgroundURLs[URLIndex];

const backgroundImage = document.createElement("img");

backgroundImage.src = todayBackgroundURL;
document.body.appendChild(backgroundImage);