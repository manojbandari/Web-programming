let quiz= {
	"questions" : [
	{
		"question":"To insert a JavaScript into an HTML page, which tag is used?",
		"option" : [
		{
			text:"javascript",
			isCorrect: false,
			feedback: "Incorrect"
		},
		{
			text:"script",
			isCorrect: true,
			feedback: "Correct"
		}
		],
		"hint": "Check out w3 school"
	},

	{

		"question":"Javascript is an object oriented language?",
		"option" : [
		{
			text:"False",
			isCorrect: false,
			feedback: "Incorrect"
		},
		{
			text:"True",
			isCorrect: true,
			feedback: "Correct"
		}
		],
		"hint": "we use the objects"	
	},

	{
		"question":"What language defines the behavior of a web page?",
		"option" : [
		{
			text:"Javascript",
			isCorrect: true,
			feedback: "Incorrect"
		},
		{
			text:"HTML",
			isCorrect: false,
			feedback: "Correct"
		}
		],
		"hint": "html shows content, javascript is dynamic"

	}
	]
}

var i=0;
var j=0;
window.onload = function display(){
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type ="radio" value="option 1" onclick="radioclicked('+i+','+j+')">'+ quiz.questions[i].option[j].text+'<br>'
													+'<input type ="radio" value="option 2" onclick="radioclicked('+i+','+j+1+')">'+ quiz.questions[i].option[j+1].text+'<br>';


	hideButton('Prev')
};
function radioclicked(i,j) {
	if(quiz.questions[i].option[j].isCorrect) {
		cli =" ";
		cli +='<div class="alert alert-success alert-dismissible">';
		cli +='<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
		cli +='<span class="glyphicon glyphicon-ok"></span>'+'<strong>' + quiz.questions[i].option[j].feedback+ '</strong>'
				document.getElementById('feedback 1').innerHTML = cli;
	}
	else {
		cli =" ";
		cli +='<div class="alert alert-warning alert-dismissible">';
		cli +='<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
		cli +='<span class="glyphicon glyphicon-remove"></span>'+'<strong>' + quiz.questions[i].option[j].feedback+ '</strong>'
				document.getElementById('feedback 1').innerHTML = cli; 
	}
	
}

function prev() {
	i--;
	showButton("Prev");
	showButton("Next");
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type ="radio" value="option 1" onclick="radioclicked('+i+','+j+')">'+ quiz.questions[i].option[j].text+'<br>'
													+'<input type ="radio" value="option 2"onclick="radioclicked('+i+','+j+1+')">'+ quiz.questions[i].option[j+1].text+'<br>';

	if(i==0) {
		hideButton('Prev');
	}

}

function next() {
	i++;
	showButton("Prev");
	showButton("Next");
	document.getElementById('question 1').innerHTML = quiz.questions[i].question;
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint;
	document.getElementById('radio 1').innerHTML = '<input type ="radio" value="option 1" onclick="radioclicked('+i+','+j+')">'+ quiz.questions[i].option[j].text+'<br>'
													+'<input type ="radio" value="option 2"onclick="radioclicked('+i+','+j+1+')">'+ quiz.questions[i].option[j+1].text+'<br>';

	if(i==quiz.questions.length-1) {
		hideButton('Next');
	}

}

function hideButton(id) {
	document.getElementById(id).style.visibility="hidden";
}

function showButton(id) {
	document.getElementById(id).style.visibility="visible";
}

function reset() {
	location.reload();
}
