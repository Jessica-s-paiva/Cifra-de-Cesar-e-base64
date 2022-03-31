var texto = document.querySelector('#frase')

var frase = document.querySelector('#frase')
var cifra = document.querySelector('#cifra')
var incrementando = document.querySelector('#incrementando')
var incremento = document.querySelector('#incremento')
cifra.addEventListener('click', function (event) {
    event.preventDefault();
    incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">
    <input type="button" value="Ok">`;
})
