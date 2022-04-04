var cifra = document.querySelector('#cifra')
var incrementando = document.querySelector('#incrementando')
var radio1 = document.querySelector('#cod')
var radio2 = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')
var iniciar = document.querySelector('#iniciar')
var codificacao = document.querySelector('#codificacao')
var cifraCodificar = [];
var codificandoCesar = '';
var cifraDecodificar = [];
var aux = [];
var decodificandoCesar = '';

cifra.addEventListener('click', function (event) {
    //event.preventDefault();
    incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">`;
})

radio1.addEventListener('click', function (event) {
    //event.preventDefault();
    mensagem.innerText = `Codificar Mensagem!`;
})

radio2.addEventListener('click', function (event) {
   // event.preventDefault();
    mensagem.innerText = `Decodificar Mensagem!`;
})

iniciar.addEventListener('click', function (event) {
    event.preventDefault();
    if(radio1.checked == true){
        cifraDeCesar();
        codificaCesar();
        codificacao.innerText = codificandoCesar;
    }else if(radio2.checked == true){
        cifraDeCesar();
        codificaCesar();
        decodificaCesar();
        decodCesar()
        codificacao.innerText = decodificandoCesar;
    }
    
})

function cifraDeCesar(){
    var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
    var caracteres = frase.value;
    var inc = incremento.value;
    for(var i = 0; i < caracteres.length; i++) {
        if(caracteres.charCodeAt(i) + parseInt(inc) > 90 && caracteres.charCodeAt(i) + parseInt(inc) < 97){
            cifraCodificar[i] = caracteres.charCodeAt(i) + 1;
            aux[i] = parseInt(inc);
            cifraCodificar.push(caracteres.charCodeAt(i) + parseInt(inc));
        }   
    }
    return cifraCodificar;
}

function codificaCesar() {
    for(var i = 0; i < cifraCodificar.length; i++) {
        codificandoCesar += String.fromCharCode(cifraCodificar[i])
    }
    return codificandoCesar;
}

function decodificaCesar(){
   // var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
   // var caracteres = frase.value;
    var inc = incremento.value;
    for(var i = 0; i < cifraCodificar.length; i++){
        cifraDecodificar.push(cifraCodificar[i] - parseInt(inc))
    }
    return cifraDecodificar
}

function decodCesar(){
    for (var i = 0; i < cifraDecodificar.length; i++){
        decodificandoCesar += String.fromCharCode(cifraDecodificar[i])
    }
    return decodificandoCesar
}