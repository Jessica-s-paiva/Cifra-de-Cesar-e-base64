var frase = document.querySelector('#frase')
var cifra = document.querySelector('#cifra')
var incrementando = document.querySelector('#incrementando')
var incremento = document.querySelector('#incremento')
var radio1 = document.querySelector('#cod')
var radio2 = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')

cifra.addEventListener('click', function (event) {
    event.preventDefault();
    incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">
    <input type="button" value="Ok">`;
})

radio1.addEventListener('click', function (event) {
    event.preventDefault();
    mensagem.innerText = `Codificar Mensagem!`;
})

radio2.addEventListener('click', function (event) {
    event.preventDefault();
    mensagem.innerText = `Decodificar Mensagem!`;
})