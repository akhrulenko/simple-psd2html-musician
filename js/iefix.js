function getNameBrowser(){

	var ua = navigator.userAgent;

	if (ua.search(/AppleWebKit/) > 0) return 'notIE';
	if (ua.search(/Firefox/) > 0) return 'notIE';

	return 'IE';
}

var browser = getNameBrowser();

if(browser == 'IE'){
	var hDisc = document.getElementsByClassName('discography')[0].getElementsByTagName('h2');
	var hConc = document.getElementsByClassName('concert')[0].getElementsByTagName('h2');

	hDisc[0].style.background = 'rgba(255,255,255,0)';
	hConc[0].style.background = 'rgba(255,255,255,0)';

	hDisc[0].style.color = '#96674f';
	hConc[0].style.color = '#78aeb0';
}