var taskGridBar = document.getElementById("task-grid-toolbar");

var buttonBeta = document.createElement("button");
var buttonBetaTest = document.createElement("button");

var buttonBetaText = document.createTextNode("Generate BETA");
var buttonBetaTestText = document.createTextNode("Generate TEST");

var goToPreposition = function (goToUrlFunc) {
	var taskId = WL.getTaskId();
	var jobNumber = WL.getJobNumber();

	var urlToBetaPreposition = goToUrlFunc(jobNumber, taskId);

	window.open(urlToBetaPreposition, '_blank');
}

buttonBeta.onclick = function() {
	goToPreposition(WL.getUrlToBetaPreposition);
}

buttonBetaTest.onclick = function() {
	goToPreposition(WL.getUrlToBetaPrepositionTesting);
}

buttonBeta.appendChild(buttonBetaText);
buttonBetaTest.appendChild(buttonBetaTestText);

taskGridBar.appendChild(buttonBeta);
taskGridBar.appendChild(buttonBetaTest);