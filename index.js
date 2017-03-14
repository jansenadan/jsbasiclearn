window.onload = function () {
	alert('loaded')
}
$.noConflict(); //Si '$' ya está definido, puedo pasarle la función 'noConflict()' para que '$' conserve el valor que se le asignó primero y no sea sobre escrito, esto ews util cuándo algunas librerias usan '$' para definir su función principal
jQuery(function () {
	alert('Ready')
})

// esto es igual a escribir:
// jQuery(document).ready(function () {
// 	alert('Ready')
// })

// Se supone que la función 'ready' de jQuery es más rápida que el 'onload' del document en JS puro (vanilla JS)