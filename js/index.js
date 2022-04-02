var cifra = document.querySelector('#cifra')
var incrementando = document.querySelector('#incrementando')
var radio1 = document.querySelector('#cod')
var radio2 = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')
var iniciar = document.querySelector('#iniciar')
var codificacao = document.querySelector('#codificacao')
var cifraCodificar = [];
var codificandoCesar = '';

cifra.addEventListener('click', function (event) {
    event.preventDefault();
    incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">`;
})

radio1.addEventListener('click', function (event) {
    event.preventDefault();
    mensagem.innerText = `Codificar Mensagem!`;
})

radio2.addEventListener('click', function (event) {
    event.preventDefault();
    mensagem.innerText = `Decodificar Mensagem!`;
})

iniciar.addEventListener('click', function (event) {
    event.preventDefault();
    cifraDeCesar();
    codificaCesar();
    codificacao.innerHTML = codificandoCesar;
})

function cifraDeCesar(){
    var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
    var caracteres = frase.value;
    var inc = incremento.value;
    var aux;
    for(var i = 0; i < caracteres.length; i++) {
        cifraCodificar.push(caracteres.charCodeAt(i) + parseInt(inc));
        if(caracteres.charCodeAt(i) == 88){
            cifraCodificar[i] = 67 + parseInt(inc);
            aux = 23;
        }else if(caracteres.charCodeAt(i) == 89){
            cifraCodificar[i] = 66 + parseInt(inc);
            aux = 23;  
        }else if (caracteres.charCodeAt(i) == 90){
            cifraCodificar[i] = 65 + parseInt(inc);
            aux = 23;  
        }else{
            aux = 0;
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