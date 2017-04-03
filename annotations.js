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



// package.json 
{
  "name": "tvfy",
  "description": "Una web app para seleccionar tus shows favoritos",
  "version": "0.1.0",
  "dependencies": {
    "jquery": "^3.2.1"
  },
  "devDependencies": {
    "babel-preset-es2015": "^6.24.0",
    "babelify": "^7.3.0",
    "browserify": "^14.1.0"
  },
  "scripts": {
    // "public": "if not exist public mkdir public", // Version para windows
    "public": "mkdir -p public", // Version para Linux Mac
    "build-js": "browserify -t [ babelify --presets [ es2015 ] ] index.js > public/app.js",
    // "copy-files": "cp index.css public/app.css && cp index.html public/index.html", // Version para linux y Mac
    // "copy-files": "cp src/index.css public/app.css && cp src/index.html public/index.html", // Version para linux y Mac
    "copy-files": "copy index.css public & copy index.html public & cd public & ren index.css app.css" // Version para WIndows
  }
}

