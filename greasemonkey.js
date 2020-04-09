// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    none
// ==/UserScript==

var count;
var numbers = [];
var interval = 1000;

window.addEventListener(
	"load",
	function () {
		//count = 0;
		setInterval(measureFPS, interval);
	},
	false
);

//Hämta FPS varje sekund
function measureFPS() {
	//count++;
	numbers.push(parseInt(document.getElementsByTagName("div")[1].textContent));
	console.log(numbers);
}
