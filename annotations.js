$(function () {
	var header = document.getElementById('app-header');
	var seleccion = $([document, header]);

	$('#app-header').find('h1') //esto es más rápido que $('#app-header h1')

	var a = $('<a>', {
		href: 'http://www.platzi.com',
		target: '_blank',
		html: 'ir a Platzi'
	})

	$('#app-body').append(a);

	// Hay Metodos 'getters' y 'setters'
	// get
	console.log($(a).attr('href'));

	//set
	a.attr({
		href: 'http://google.com',
		html: 'Ir a Goggle'
	})


// Estas son 2 formas de hacer lo mismo, una desde el elemento "padre" (al que le quiero insertar un elemento) y la segunda desde el elemento que estoy creando y quiero insertar.
	$('header#app-header')
	.append($('<p>', { html: 'Me acaban de crear' }))

	$('<p>', { html: 'Me acaban de crear' })
	.appendTo($('header#app-header'))


})


//Ejemplo de Closure ???

var name = 'Sasha';

function alerta() {
	alert('Hola' + name);
}

alerta();

