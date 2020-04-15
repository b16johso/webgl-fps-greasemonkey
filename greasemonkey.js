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
	"pointerdown",
	function () {
		if (!isRunning) {
			isRunning = true;
			timesRun = 0;
			interval = setInterval(function () {
				timesRun++;
				fps.push(parseInt(document.getElementsByTagName("div")[1].textContent));
				console.log(fps);

				/*if (timesRun === timesToRun) {
					downloadCSV();
					resetScript();
					console.log("Ran " + timesRun + " times");
				}*/
			}, intervalTime);
		}
	},
	false
);

window.addEventListener(
	"keydown",
	function (e) {
		if (e.code === "KeyJ") {
			console.log("Pressed J");
			downloadCSV();
			resetScript();
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
	var link = document.createElement("a");
	link.href = "data:application/csv;charset=utf-8," + encodeURIComponent(data);
	link.download = "data.csv";
	document.getElementsByTagName("body")[0].appendChild(link);
	link.click();
}
