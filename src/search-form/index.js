/**
* Module Dependencies
*/

import $ from 'jquery';
// import $tvShowsContainer from '../tv-shows-container';
// import { searchShows } from '../tvmaze-api-client';
// import renderShows from '../render';
import page from 'page';


$('#app-body')
		.find('form')
		.submit(function(ev) {
			ev.preventDefault();

			var busqueda = $(this)
				.find('input[type="text"]')
				.val();

			page(`/search?q=${busqueda}`)
		})