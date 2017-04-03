/**
* Module dependencies
*/

var $ = require('jquery');



$(function () {

	var $tvShowsContainer = $('#app-body')
			.find('.tv-shows'),
			$loader = $tvShowsContainer.find('.loader')

	$tvShowsContainer.on('click', 'button.like', function (ev) {
		var $this = $(this);
		// $this.animate({
		// 	'fontSize': '30px'
		// }, 'fast');
		// $this.closest('.tv-show').addClass('liked');
		$this.closest('.tv-show').toggleClass('liked');
	})



	function renderShows(shows) {
		var loaderEsta = $loader.css('display')
		// console.log('loaderEsta: ', loaderEsta)
		if (loaderEsta == 'none') {
			$loader.css('display', 'block');
		}
		shows.forEach(function(show) {
			var article = template
				.replace(':name:', show.name)
				.replace(':img:', show.image ? show.image.medium : '')
				.replace(':summary:', show.summary)
				.replace(':img alt:', show.name + " Logo")
			var $article = $(article)
			$article.hide()
		// console.log('loaderEsta: ', loaderEsta)

			if (loaderEsta == 'block') {
				$loader.fadeOut('fast', function() {
					$tvShowsContainer
						.append($article.fadeIn('slow'))
				})
			} else {
				$tvShowsContainer
					.append($article.fadeIn('slow'))
			}
		})
	}

	// Submit search form
	$('#app-body')
		.find('form')
		.submit(function(ev) {
			ev.preventDefault();
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();
			$tvShowsContainer.find('.tv-show').remove();

			//Versión Con Promises de jQuery
			$.ajax({
				url: 'http://api.tvmaze.com/search/shows',
				data: { q: busqueda }
			})
				.then(function (response/*, textStatus, xhr*/) {
					var shows = response.map(function (el) {
						return el.show
					})
					renderShows(shows)
				})
		})

		// $.ajax() // llamamos el método 'ajax' de la función 'jQuery'

		var template = '<article class="tv-show">' +
					'<div class="left img-container">' +
						'<img src=":img:" alt=":img alt:">' +
					'</div>' +
					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
						'<button class="like">&hearts;</button>'
					'</div>' +
				'</article>';

		if (!localStorage.shows) {
			//Versión Con Promises de jQuery
			$.ajax('http://api.tvmaze.com/shows')
				.then(function (shows/*, textStatus, xhr se pueden pasar estos parámetros, pero son opcionales*/) {
					localStorage.shows = JSON.stringify(shows);
					renderShows(shows);
				})
		} else {
			renderShows(JSON.parse(localStorage.shows));
		}
})
