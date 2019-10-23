var sliders = document.getElementsByClassName('content');
var arrows = document.getElementsByClassName('arrows');
var pointers = document.getElementsByClassName('pointers');
var counter = 1;
var prevSlide = 1;
var activePoint = 1;

arrows[0].onclick = function(){
	setTimeout(function(){
		prevSlide = counter;
		counter--;
		if(counter==0){
			counter = 3;
			prevSlide = 1;
		}
		showImg(prevSlide - 1);
		changePointers(prevSlide, counter);
	}, 200);
}

arrows[1].onclick = function(){
	setTimeout(function(){
		prevSlide = counter;
		counter++;
		if(counter==4){
			counter = 1;
			prevSlide = 3;
		}
		showImg(prevSlide - 1);
		changePointers(prevSlide, counter);
	}, 200);
}

pointers[0].children[0].onclick = function(){
	counter = 1;
	showImg(activePoint - 1);
	changePointers(activePoint, 1);
}

pointers[0].children[1].onclick = function(){
	counter = 2;
	showImg(activePoint - 1);
	changePointers(activePoint, 2);
}

pointers[0].children[2].onclick = function(){
	counter = 3;
	showImg(activePoint - 1);
	changePointers(activePoint, 3);
}

function showImg(prevSlide){
	var counterOp = 0.1;
	sliders[prevSlide].style.display = 'none';
	sliders[counter - 1].style.display = 'block';
	sliders[counter - 1].style.opacity = 0;

	var timer;

	timer = setInterval(function (){
		sliders[counter - 1].style.opacity = counterOp;

		counterOp = counterOp + 0.03;

		if(counterOp>=1){
			clearInterval(timer);
		}
	}, 20);
}

function changePointers(prevPoint, currentPoint){
	activePoint = currentPoint;
	pointers[0].children[prevPoint - 1].style.background = '#fff';
	pointers[0].children[activePoint - 1].style.background = '#000';
}