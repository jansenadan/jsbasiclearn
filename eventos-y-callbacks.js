function suma(num1, num2) {
	return num1 + num2;
}

function resta(num1, num2) {
	return num1 - num2;
}

function division(num1, num2) {
	return num1 / num2;
}

function multiplicacion(num1, num2) {
	return num1 * num2;
}

function calculadora(cuenta, num1, num2) {
	return cuenta(num1, num2);
}

calculadora(suma, 1, 3);
calculadora(rest, 1, 3);
calculadora(division, 10, 2);
calculadora(multiplicacion, 5, 5);



// otro Ejemplo Callback 
/**
Ejecutar luego de una tarea asincrónica
**/

var postId = '1234567890';

obtenerLikes(postId, function (likes) {
	alert("Se encontraron " + likes.length + " likes.");
});

function obtenerLikes(postId, fn) {
	setTimeout(function () {
		fn([ '545345jkg5hj5ghj5', '3243243g4hy3g4hj34f3gfd5fg', '65h67jghf423gh4f5' ])
	}, 5000); 
}


// Ejemplo de Eventos
/**
Ejemplo de click de un botón
****************************
 Binding de eventos ("asignando eventos")
****************************
**/

// <button type="submit" id="myButton">Alert!</button>

var button = document.getElementById('myButton');

button.addEventListener('click', function (event) {
	alert('Me hicieron click!');
})

//Versión con jQuery

//Directo con click, esto es un atajo del método 'on'
$('#myButton').click(function () {
	alert('Me hicieron click!');
})


//Este es con el método 'on'
$('#myButton').on('click', function () {
	alert('Me hicieron click!');
})


// otro ejemplo

$('.product button.like').click(function (ev) {
	$(this)
		.closest('.product')
		.addClass('liked')
})

var tv = $('article .info h1')


$('article .info h1').click(function (ev) {
	$(this)
		.closest('article')
		.addClass('liked')
	console.log($(this));
})



// múltiples eventos, mismo handler
$('input').on('click change', function () {
	console.log( 'Me hicieron click o me cambiaron el texto!' );
})

// Múltiples eventos con diferentes handlers
$('p').on({
	'click': function () {
		console.log('Me hicieron click!');
	},
	'mouseover': function () {
		console.log('El mouse ha pasado por aquí!');
	}
});


//***********************************
// Métodos relacionados a los eventos
//Browser events .resize() y .scroll()
// Document loading  .ready()
// Event Handler Attacment  .on()  .off()  ?? de aquí en adelante no se que hacen .one() jQuery.proxy()  .trigger()  .triggerHandler()  .unbind()  .undelegate()

// jQuery Event Object
// event.currentTarget   event.preventDefault()   event.stopPropagation()  event.target  event.type

// Form Events
// .blur()  .change()  .focus()  .select()  .submit()

// Keyboard events
// .focusin()  .focusout()  .keydown()  .keypress()  .keyup()

// Mouse Events
// .click()  .dblclick()  .focusin()  .focusout()  .hover()  .mousedown()   .mouseenter()   .mouseleave()   .mousemove()  .mouseout()   .mouseover()  .mouseup()



/***+
+++++++++++++++++++++++++++++++
  Quitando eventos
++++++++++++++++++++++++++++++++
**/

// ejemplo poniendolos y luego removiendo uno de ellos

var foo = function () { console.log('foo'); };
var bar = function () { console.log('bar'); };

$('p').on('click', foo).on('click', bar);
$('p').off('click', bar); // Retire solo uno de los listeners, foo todavia está 'bindeado'
$('p').off('click') // Quito de una sola todos los listeners que estan asignados al evento 'click'



// Namespaces
/**
++++++++++++++++++++++++++++++++++++++
Usualmente se usan cuando se tiene una aplicación muy compleja o cuando se quiere escribir un plugin o código para compartir, para manejar nuestro eventos y agruparlos de una forma que se afacíl administrarlos
***/
// usando Namespaces
$('p').on( 'click.myNamespace', function () { /* ... */} );
$('p').off( 'click.myNamespace' );
$('p').off( '.myNamespace' ); // Quita todas las funciones que estan asignadas al namespace
// Debo leer mas sobre namespaces


// Eventos relacionados con los Forms
$('form').on('submit', function (event) {
	// prevenir que el form haga post
	event.preventDefault();

	// Hacemos lo que queremos, como mostrar en la consola el evento
	console.log(event);

	var action = $(this).attr('action');

	// Hacemos el Request ...
$.ajax(action, { /* ... */ })
});



// propagación de eventos
// ejemplo
<html>
<body>
	<div id="container">
		<ul id="list">
			<li><a href="/products/1">Producto #1</a></li>
			<li><a href="/products/2">Producto #2</a></li>
			<li><a href="/products/3">Producto #3</a></li>
			<li><a href="/products/4">Producto #4</a></li>
		</ul>
	</div>
</body>
</html>

$('#list a').on('click', function (event) {
	event.preventDefault()
	console.log( $(this).text() );
});

// Supongamos que adicionamos un item adicional al listado de eventos después de haber 'bindeado' el listener, entonces tendríamos que volver a 'bindear' el listener al nievo item, podemos aprovechar la propagación de eventos para 'bindear' el listener al elemento padre y "detectar" en que elemto hijo se hizo el click o sucedio el evento asi:
$('#list').on( 'click', 'a', function (event) {
	event.preventDefault();
	console.log( $(this).text() );
} )



// trigger
// Disparado de eventos manualmente, estos 2 hacen lo mismo, es decir, que si yo envio el método '.click()' vacio (si parametros), es el equivalente a '.trigger("click") pero hacer este disparado manual de eventos no es una buena práctica.
$('#myButton').trigger('click');
$('myButton').click();
















