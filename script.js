function showBll() {

	if (document.body.clientWidth >= 890) {

		var ballondesk = document.querySelector('.ballon_desktop');
		ballondesk.style.display = 'flex';

	} else {

		var ballonmob = document.querySelector('.ballon_mobile');
		ballonmob.style.display = 'flex';

	}
}

function hideBll() {

	var ballondesk = document.querySelector('.ballon_desktop');
	ballondesk.style.display = 'none';
	var ballonmob = document.querySelector('.ballon_mobile');
	ballonmob.style.display = 'none';
	
}