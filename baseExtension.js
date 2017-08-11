var WL = function() {
	var getTaskId = function(){
		return document.getElementById("form-load-task-results-table").getElementsByTagName("td")[0].textContent.substring(0,7);
	};
	
	var getJobNumber = function() {
		return document.getElementById("form-load-searchCriteria").value;
	};
	
	var getUrlToBetaPreposition = function(jobNumber, taskId) {
		return "http://webbeta1.qg.com:8045/preposition/" + jobNumber + "/" + taskId + "/TemplateGeneration";
	};
	
	var getUrlToBetaPrepositionTesting = function(jobNumber, taskId) {
		return "http://webbeta1.qg.com:8045/prepositionTesting/" + jobNumber + "/" + taskId + "/TemplateGeneration";
	};
	
	return {
		getTaskId: getTaskId,
		getJobNumber: getJobNumber,
		getUrlToBetaPreposition: getUrlToBetaPreposition,
		getUrlToBetaPrepositionTesting: getUrlToBetaPrepositionTesting
	};
}();