// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    GM.getValue
// @grant    GM.setValue
// @include  http://127.0.0.1:5500*
// ==/UserScript==

var count;
var numbers = [100, 200, 300];
var intervalTime = 1000;
var interval;

window.addEventListener(
	"load",
	function () {
		//count = 0;
		//interval = setInterval(measureFPS, intervalTime);
		downloadCSV();
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
	console.log("Test");
}

function downloadCSV() {
	var data = numbers.toString();
	var a = document.createElement("a");
	a.href = "data:application/csv;charset=utf-8," + encodeURIComponent(data);
	//supported by chrome 14+ and firefox 20+
	a.download = "data.csv";
	//needed for firefox
	document.getElementsByTagName("body")[0].appendChild(a);
	//supported by chrome 20+ and firefox 5+
	a.click();
}
