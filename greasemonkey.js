// ==UserScript==
// @name     Unnamed Script 788987
// @version  1
// @grant    GM.getValue
// @grant    GM.setValue
// @include  http://127.0.0.1:5500/*
// @include  http://127.0.0.1:5501/*
// ==/UserScript==

var timesRun;
var timesToRun = 2;
var fps = [];
var intervalTime = 1000;
var interval;
var isRunning = false;
var csv = [];
var currentTest = 0;

window.addEventListener(
  "pointerdown",
  function () {
    if (!isRunning) {
      isRunning = true;
      timesRun = 0;
      interval = setInterval(function () {
        timesRun++;
        fps.push(parseInt(document.getElementsByTagName("div")[1].textContent).toString());
        //console.log(fps);

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
      console.log(currentTest);
      resetScript();
      if (currentTest > timesToRun) {
        downloadCSV();
      }
    }
  },
  false
);

function resetScript() {
  clearInterval(interval);
  fps.push("\n");
  csv.push(fps);
  console.log(csv);
  fps = [];
  isRunning = false;
  currentTest++;
}

function downloadCSV() {
  var data = csv.toString();
  var link = document.createElement("a");
  link.href = "data:application/csv;charset=utf-8," + encodeURIComponent(data);
  link.download = "data.csv";
  document.getElementsByTagName("body")[0].appendChild(link);
  link.click();
}
