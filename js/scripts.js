$(function(){
	var jumbo = $('.jumbotron .row p');
	var school = $('.cv #school .media');
	var language = $('.cv #language .media');
	var cv = $('.cv .container');
	var about = 0;

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
		else {
			cv.removeClass('show');
			this.innerText = 'zobacz CV';
		}
	});

	$('.cv #school a').click(function(){
		if (this.innerText == 'więcej') {
			school.addClass('show');
			this.innerText = 'mniej';
		}
		else {
			school.removeClass('show');
			this.innerText = 'więcej';
		}
	});

	$('.cv #language .media a').click(function(){
		if (this.innerText == 'więcej') {
			language.addClass('show');
			this.innerText = 'mniej';
		}
		else {
			language.removeClass('show');
			this.innerText = 'więcej';
		}
	});

	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

});