// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    none
// ==/UserScript==

var count;
var numbers = [];
var intervalTime = 1000;
var interval;

window.addEventListener(
	"load",
	function () {
		count = 0;
		interval = setInterval(measureFPS, intervalTime);
	},
	false
);

//Hämta FPS varje sekund
function measureFPS() {
	count++;
	if (count > 10) {
		clearInterval(interval);
	} else {
		numbers.push(parseInt(document.getElementsByTagName("div")[1].textContent));
		console.log(numbers);
	}
}

function getData() {
	// Make anchor and click it!
	var anchor = document.createElement("a");
	anchor.setAttribute("href", encodeURI(numbers));
	anchor.setAttribute("download", "my_data.csv");
	anchor.innerHTML = "Click Here to download";
	document.body.appendChild(anchor);
	anchor.click();
}
