var texto = document.querySelector('#frase')

var frase = document.querySelector('#frase')
var cifra = document.querySelector('#cifra')
var incremento = document.querySelector('#incremento')
cifra.addEventListener('click', function (event) {
    event.preventDefault();
    incremento.innerHTML = ` <input type="text">` 
})
