$(function(){
	var jumbo = $('.jumbotron .row p');
	var school = $('.cv #school .media');
	var language = $('.cv #language .media');
	var cv = $('.cv .container');
	var about = 0;
	var schoolSwitch = 0;
	var languageSwitch = 0;

	$('nav .navbar-right .btn').click(function(){
		$('#ver')[0].click();
	});

	$('.jumbotron a').click(function(){
		if (about == 0) {
			jumbo.addClass('show');
			about = 1;
		}
		else {
			jumbo.removeClass('show');
			about = 0;
		}
	});

	$('.cv .btn-info').click(function(){
		if (this.innerText == 'zobacz CV') {
			cv.addClass('show');
			this.innerText = 'zamknij CV';
		}
		else if (this.innerText == 'zamknij CV') {
			cv.removeClass('show');
			this.innerText = 'zobacz CV';
		}
		else if (this.innerText == 'watch CV') {
			cv.addClass('show');
			this.innerText = 'close CV';
		}
		else {
			cv.removeClass('show');
			this.innerText = 'watch CV';
		}		
	});

	$('.cv #school a').click(function(){
		if (schoolSwitch == 0) {
			school.addClass('show');
			$('.cv #school .glyphicon').removeClass('glyphicon-menu-down');
			$('.cv #school .glyphicon').addClass('glyphicon-menu-up');
			schoolSwitch = 1;
		}
		else {
			school.removeClass('show');
			$('.cv #school .glyphicon').removeClass('glyphicon-menu-up');
			$('.cv #school .glyphicon').addClass('glyphicon-menu-down');
			schoolSwitch = 0;
		}
	});

	$('.cv #language .media a').click(function(){
		if (languageSwitch == 0) {
			language.addClass('show');
			$('.cv #language .glyphicon').removeClass('glyphicon-menu-down');
			$('.cv #language .glyphicon').addClass('glyphicon-menu-up');
			languageSwitch = 1;
		}
		else {
			language.removeClass('show');
			$('.cv #language .glyphicon').removeClass('glyphicon-menu-up');
			$('.cv #language .glyphicon').addClass('glyphicon-menu-down');
			languageSwitch = 0;
		}
	});

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

});