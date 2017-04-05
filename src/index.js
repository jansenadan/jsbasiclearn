/**
* Module Dependencies
**/

import $ from 'jquery';
import page from 'page';
import { getShows, searchShows } from './tvmaze-api-client';
import renderShows from './render';
import './search-form';
import $tvShowsContainer from './tv-shows-container';

// import { getShows } from 'src/tvmaze-api-client';
// import renderShows from 'src/render';
// import $tvShowsContainer from 'src/tv-shows-container';
import qs from 'qs';

	
page('/', function (ctx, next) {
	$tvShowsContainer.find('.tv-show').remove();
	
	if (!localStorage.shows) {
		getShows(function (shows) {
			localStorage.shows = JSON.stringify(shows);
			renderShows(shows);		
		})
			
	} else {
		renderShows(JSON.parse(localStorage.shows));
	}
})

page('/search', function (ctx, next) {
	$tvShowsContainer.find('.tv-show').remove();

	const busqueda = qs.parse(ctx.querystring)

	searchShows(busqueda, function (response) {
		var shows = response.map(function (el) {
				return el.show
			})
			renderShows(shows)
	})
})

page() // inicializando page para que empiece a "escuchar" el location del browser