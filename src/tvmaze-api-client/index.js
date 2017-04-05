/**
* Module Dependencies
*/

import $ from 'jquery';

export function getShows(fn) {
	// version sin promises 
	$.ajax('http://api.tvmaze.com/shows', {
		success: function (shows, textStatus, xhr) {
			fn(shows)
		}
	})
}

export function searchShows(busqueda, fn) {
	$.ajax('http://api.tvmaze.com/search/shows', {
		data: busqueda,
		success: function (res, taxteStatus, xhr) {
			fn(res)
		},
		error: function (error) {
			console.log('error:',error);
		}
	})
}