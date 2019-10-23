var dates = document.getElementsByClassName('date');
var paragraphs = document.getElementsByClassName('story');
var n = 0.2;

dates[0].onclick = function(){
	showHistory(0,1,2);
}

dates[1].onclick = function(){
	showHistory(1,0,2);
}

dates[2].onclick = function(){
	showHistory(2,0,1);
}

function showHistory(currentDate, hideFirst, hideSecond){
	dates[currentDate].style.opacity = 1;
	dates[hideFirst].style.opacity = .5;
	dates[hideSecond].style.opacity = .5;

	paragraphs[currentDate].style.display = 'block';
	showParagraph(paragraphs[currentDate]);
	paragraphs[hideFirst].style.display = 'none';
	paragraphs[hideSecond].style.display = 'none';
}

function showParagraph(object){
	var timer;

	timer = setInterval(function (){
		object.style.opacity = n;

		n = n + 0.03;

		if(n>=1){
			clearInterval(timer);
		}

	}, 20);
	n = 0.2;
}