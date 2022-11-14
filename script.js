var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var button = document.querySelector("#randomizer")

function changeColor()
{
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeColor();
}

randomGradient();

color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)
button.addEventListener("click", randomGradient)

