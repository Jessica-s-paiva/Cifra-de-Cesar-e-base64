var incrementando = document.querySelector('#incrementando')
var cod = document.querySelector('#cod')
var decod = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')
var iniciar = document.querySelector('#iniciar')
var codificacao = document.querySelector('#codificacao')
var mensagemOculta = document.querySelector('#mensagemOculta')

var cifraCodificar = [];
var codificandoCesar = '';
var cifraDecodificar = [];
var aux = [];
var decodificandoCesar = '';

function escolher(){
    incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">`;
}

cod.addEventListener('click', function (event) {
    //event.preventDefault();
    mensagem.innerText = `Codificar Mensagem!`;
})

decod.addEventListener('click', function (event) {
   // event.preventDefault();
    mensagem.innerText = `Decodificar Mensagem!`;
    mensagemOculta.innerHTML = `<label for="frase1">Digite a mensagem que deseja criptografar:</label>
    <input type="text" id="frase1" value = "${codificandoCesar}">`
    console.log(frase);
    cifraDeCesar();
        
})

iniciar.addEventListener('click', function (event) {
    event.preventDefault();
    if(cod.checked == true){
        cifraDeCesar();
        codificaCesar();
        codificacao.innerText = codificandoCesar;
    }else if(decod.checked == true){
        
        decodificaCesar();
        decodCesar()
        codificacao.innerText = decodificandoCesar;
    }
    
})

function cifraDeCesar(){
    var frase = document.querySelector('#frase')
    var caracteres = frase.value;
    var incremento = document.querySelector('#incremento')
    var inc = incremento.value;
    if(inc > 25 && inc != 26){
        var novoIncremento = inc % 26;
    }else if(inc == 26){
        novoIncremento = 1;
    }
    else{
        novoIncremento = inc;
    }
    for(var i = 0; i < caracteres.length; i++){
        var novoCaracter = caracteres.charCodeAt(i);
        var novoAscii = novoCaracter + parseInt(novoIncremento);
        if(novoCaracter >= 65 && novoCaracter <= 90){
            if(novoAscii > 90){
                var novoInc = 90 - novoCaracter;
                novoAscii = 65 + novoInc;
                cifraCodificar.push(novoAscii);
            }else{
                cifraCodificar.push(novoAscii);
            }
        }else if(novoCaracter >= 97 && novoCaracter <= 122){
            if(novoAscii > 122){
                novoInc = 122 - novoCaracter;
                novoAscii = 97 + novoInc;
                cifraCodificar.push(novoAscii);
            }else{
                cifraCodificar.push(novoAscii);
            }
        }
    }
    
    console.log(cifraCodificar);
    return cifraCodificar;
}

function codificaCesar() {
    for(var i = 0; i < cifraCodificar.length; i++) {
        codificandoCesar += String.fromCharCode(cifraCodificar[i])
    }
    return codificandoCesar;
}

function decodificaCesar(){
    var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
    var caracteres = frase.value;
    var inc = incremento.value;
    if(inc > 25 && inc != 26){
        var novoIncremento = inc % 26;
    }else if(inc == 26){
        novoIncremento = 1;
    }
    else{
        novoIncremento = inc;
    }
    for(var i = 0; i < caracteres.length; i++){
        var novoCaracter = caracteres.charCodeAt(i);
        var novoAscii = novoCaracter - parseInt(novoIncremento);
        if(novoCaracter >= 65 && novoCaracter <= 90){
            if(novoAscii > 90){
                var novoInc = 90 - novoCaracter;
                novoAscii = 65 + novoInc;
                cifraCodificar.push(novoAscii);
            }else{
                cifraCodificar.push(novoAscii);
            }
        }else if(novoCaracter >= 97 && novoCaracter <= 122){
            if(novoAscii > 122){
                novoInc = 122 - novoCaracter;
                novoAscii = 97 + novoInc;
                cifraCodificar.push(novoAscii);
            }else{
                cifraCodificar.push(novoAscii);
            }
        }
    }
    return cifraDecodificar
}

function decodCesar(){
    for (var i = 0; i < cifraDecodificar.length; i++){
        decodificandoCesar += String.fromCharCode(cifraDecodificar[i])
    }
    return decodificandoCesar
}