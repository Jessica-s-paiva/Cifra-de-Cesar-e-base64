var incrementando = document.querySelector('#incrementando')
var cod = document.querySelector('#cod')
var decod = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')
var iniciar = document.querySelector('#iniciar')
var codificacao = document.querySelector('#codificacao')
var mensagemOculta = document.querySelector('#mensagemOculta')
var opcoes = document.querySelector('#opcoes')
var cifraCodificar = [];
var codificandoCesar = '';
var cifraDecodificar = [];
var decodificandoCesar = '';
var textoCodificado = '';

opcoes.addEventListener("change", function (event) {
    event.preventDefault();
    if (opcoes.selectedIndex == 1 ) {
        incrementando.innerHTML = `<label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">`;
    }
})

cod.addEventListener('click', function (event) {
    //event.preventDefault();
    mensagem.innerText = `Codificar Mensagem!`;
})

decod.addEventListener('click', function (event) {
   // event.preventDefault();
    mensagem.innerText = `Decodificar Mensagem!`;
})

iniciar.addEventListener('click', function (event) {
    event.preventDefault();
    var frase = document.querySelector('#frase').value;
    var baseCod = window.btoa(frase);
    var baseDecod = window.atob(baseCod);
    if(opcoes.selectedIndex == 1 && cod.checked == true){
        cifraDeCesar();
        codificaCesar();
        textoCodificado = codificandoCesar;
        codificacao.innerText = textoCodificado; 
    }else if(opcoes.selectedIndex == 1 && decod.checked == true){
        mensagemOculta.innerHTML = `<label for="frase">Digite a mensagem que deseja criptografar:</label>
        <input type="text" id="frase" value = "${textoCodificado}">`
        console.log(frase);
        decodificaCesar();
        decodCesar()
        //cifraDeCesar();
        codificacao.innerText = decodificandoCesar;
    }else if (opcoes.selectedIndex == 2 && cod.checked == true) {
        console.log(baseCod);
        console.log(baseDecod);
        var codificaBase = document.querySelector('#codificacao')
        codificaBase.innerText = baseCod;
        
    } else if(opcoes.selectedIndex == 2 && decod.checked == true ){
        mensagemOculta.innerHTML = `<label for="frase">Digite a mensagem que deseja criptografar:</label>
        <input type="text" id="frase" value = "${baseCod}">`
        console.log(baseDecod);
        codificaBase = document.querySelector('#codificacao')
        codificaBase.innerText = baseDecod;
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
        if(novoCaracter == 32){
            novoAscii = 32;
            cifraCodificar.push(novoAscii);
        }else if(novoCaracter >= 65 && novoCaracter <= 90){
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
    codificandoCesar = ''
    for(var i = 0; i < cifraCodificar.length; i++) {
        codificandoCesar += String.fromCharCode(cifraCodificar[i])
    }
    cifraCodificar = [];
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
        if(novoCaracter == 32){
            novoAscii = 32;
            cifraCodificar.push(novoAscii);
        }else if(novoCaracter >= 65 && novoCaracter <= 90){
            if(novoAscii < 65){
                var novoInc = 65 - novoCaracter;
                novoAscii = 90 - novoInc;
                cifraDecodificar.push(novoAscii);
            }else{
                cifraDecodificar.push(novoAscii);
            }
        }else if(novoCaracter >= 97 && novoCaracter <= 122){
            if(novoAscii < 97){
                novoInc = 97 - novoCaracter;
                novoAscii = 122 - novoInc;
                cifraDecodificar.push(novoAscii);
            }else{
                cifraDecodificar.push(novoAscii);
            }
        }
    }
    return cifraDecodificar
}

function decodCesar(){
    decodificandoCesar = ''
    for (var i = 0; i < cifraDecodificar.length; i++){
        decodificandoCesar += String.fromCharCode(cifraDecodificar[i])
    }
    cifraDecodificar = [];
    return decodificandoCesar
}