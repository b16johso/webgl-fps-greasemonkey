// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    GM.getValue
// @grant    GM.setValue
// @include  http://127.0.0.1:5500/*
// ==/UserScript==

var timesRun;
var timesToRun = 10;
var intervalTime = 1000;
var fps = [];

window.addEventListener(
	"load",
	function () {
		timesRun = 0;
		var interval = setInterval(function () {
			timesRun++;
			if (timesRun === timesToRun) {
				downloadCSV();
				clearInterval(interval);
			}
			fps.push(parseInt(document.getElementsByTagName("div")[1].textContent));
			console.log(fps);
		}, intervalTime);
	},
	false
);

function downloadCSV() {
	var data = fps.toString();
	var a = document.createElement("a");
	a.href = "data:application/csv;charset=utf-8," + encodeURIComponent(data);
	a.download = "data.csv";
	document.getElementsByTagName("body")[0].appendChild(a);
	a.click();
}
