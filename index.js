$(function () {
	var headerEl = document.getElementById('app-header');
	var header = $('header');
	var title = $('h1', header[0]); //El segundo parámetro que se envía es el contexto donde debe buscar, en este caso el contexto DEBE SER UN ELEMENTO DEL DOM, NO UN OBJETO DE JQUERY; el elemento del DOM es el elemento[0] del objeto jQuery.
	var title = $('h1', headerEl); //El segundo parámetro que se envía es el contexto donde debe buscar, en este caso el contexto DEBE SER UN ELEMENTO DEL DOM, NO UN OBJETO DE JQUERY; el elemento del DOM es el elemento[0] del objeto jQuery.

	// console.log(header);
	console.log(title);
})

$(function () {
	var header = document.getElementById('app-header');
	var seleccion = $([ document, header]); //Puedo pasar un array de elementos para incluirlos dentro de un objeto de j Query.
	console.log(seleccion);
})



$(function () {
	var header = document.getElementById('app-header');
	var seleccion = $([ document, header]); //Puedo pasar un array de elementos para incluirlos dentro de un objeto de j Query.

	var formEl = $(':input'); //<input>, <textarea>, <select>
	
	var selected = $(':selected');

	var enabled = $(':enabled');
	var disabled = $(':disabled');
	var file = $(':file');
})









// window.onload = function () {
// 	alert('loaded')
// }
// $.noConflict(); //Si '$' ya está definido, puedo pasarle la función 'noConflict()' para que '$' conserve el valor que se le asignó primero y no sea sobre escrito, esto ews util cuándo algunas librerias usan '$' para definir su función principal
// jQuery(function () {
// 	alert('Ready')
// })

// // esto es igual a escribir:
// // jQuery(document).ready(function () {
// // 	alert('Ready')
// // })

// // Se supone que la función 'ready' de jQuery es más rápida que el 'onload' del document en JS puro (vanilla JS)