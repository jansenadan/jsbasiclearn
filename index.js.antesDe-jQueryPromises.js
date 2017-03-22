$(function () {

	var $tvShowsContainer = $('#app-body')
			.find('.tv-shows'),
			$loader = $tvShowsContainer.find('.loader')

	function renderShows(shows) {
		var loaderEsta = $loader.css('display')
		console.log('loaderEsta: ', loaderEsta)
		if (loaderEsta == 'none') {
			$loader.css('display', 'block');
		}
		// console.log('renderShows se ejecuta y esto es shows: ', shows)
		shows.forEach(function(show) {
			var article = template
				.replace(':name:', show.name)
				.replace(':img:', show.image.medium)
				.replace(':summary:', show.summary)
				.replace(':img alt:', show.name + " Logo")
			var $article = $(article)
			$article.hide()
		console.log('loaderEsta: ', loaderEsta)

			if (loaderEsta == 'block') {
				$loader.fadeOut('fast', function() {
					// console.log('va un show: ', show, ', y esto es un article: ', $article);
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
// function onsubmit (ev) {

// }
// console.log(this); // aqui 'this' es #document

	$('#app-body')
		.find('form')
		.submit(function(ev) {
			ev.preventDefault();
			// console.log(this); // aqui 'this' es el elemento seleccionado (es decir el form) NO ES UN jQuery OBJECT
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();
			// console.log('se hizo submit con el valor: '+ busqueda);
			$tvShowsContainer.find('.tv-show').remove();

			$.ajax({
				url: 'http://api.tvmaze.com/search/shows',
				data: { q: busqueda },
				success: function (response, textStatus, xhr) {
					// console.log(response);
					var shows = response.map(function (el) {
						return el.show;
					})

					renderShows(shows);
				}
			})

		})

		//http://api.tvmaze.com/shows
		// $.ajax() // llamamos el método 'ajax' de la función 'jQuery'

		var template = '<article class="tv-show">' +
					'<div class="left img-container">' +
						'<img src=":img:" alt=":img alt:">' +
					'</div>' +
					'<div class="right info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>' +
				'</article>';

		$.ajax(/*'http://api.tvmaze.com/shows', */{
			url: 'http://api.tvmaze.com/shows', // aqui tambien puede ir la URL que pasamos cómo primer parametro al método 'ajax'
			success: function(shows, textStatus, xhr) {
				// console.log('hizo el primer request: ', shows);
				renderShows(shows);
			}
		})
})

// console.log(this); // aqui 'this' es Window

