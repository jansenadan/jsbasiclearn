/**
* Module Dependencies
**/

import $ from 'jquery';
import $tvShowsContainer from '../tv-shows-container'
import $loader from '../loader'
// import $tvShowsContainer from 'src/tv-shows-container'
// import $loader from 'src/loader'

var template = `<article class="tv-show">
		<div class="left img-container">
			<img src=":img:" alt=":img alt:">
		</div>
		<div class="right info">
			<h1>:name:</h1>
			<p>:summary:</p>
			<button class="like">&hearts;</button>
		</div>
	</article>`;

export default function renderShows(shows) {
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