// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    GM.getValue
// @grant    GM.setValue
// @include  http://127.0.0.1:5500/*
// ==/UserScript==

var timesRun;
var timesToRun = 10;
var fps = [];
var intervalTime = 1000;
var interval;
var isRunning = false;

window.addEventListener(
	"click",
	function () {
		if (!isRunning) {
			isRunning = true;
			timesRun = 0;
			interval = setInterval(function () {
				timesRun++;
				fps.push(parseInt(document.getElementsByTagName("div")[1].textContent));
				console.log(fps);

				if (timesRun === timesToRun) {
					//downloadCSV();
					resetScript();
					console.log("Ran " + timesRun + " times");
				}
			}, intervalTime);
		}
	},
	false
);

function resetScript() {
	clearInterval(interval);
	fps = [];
	isRunning = false;
}

function downloadCSV() {
	var data = fps.toString();
	var a = document.createElement("a");
	a.href = "data:application/csv;charset=utf-8," + encodeURIComponent(data);
	//supported by chrome 14+ and firefox 20+
	a.download = "data.csv";
	//needed for firefox
	document.getElementsByTagName("body")[0].appendChild(a);
	//supported by chrome 20+ and firefox 5+
	a.click();
}
