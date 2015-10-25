var answer = document.getElementById('answer');
var submitAnswer = document.getElementById('submitAnswer');

submitAnswer.addEventListener("click", function() {
	var value = answer.value;
	if(value == "") {
		alert('Type in an answer');
	} else if (value == "color") {
		alert("Correct");
		wellDone();
	} else if (value == "Color") {
		alert("Remember, don't capitalize!");
	} else {
		alert("Keep trying");
	}
});

function wellDone() {
	
	var wellDone = document.createElement('div');
	wellDone.className = 'wellDone';
	wellDone.innerHTML = "Success!";
	document.body.appendChild(wellDone);

}