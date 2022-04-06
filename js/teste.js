var cesar = [];
var criptMensagem = [];
function cifraDeCesar(){
    for(var i = 0; i < mensagem.length; i++){
        cesar.push(mensagem.charCodeAt(i) + incremento);
    }
    return cesar
}

cifraDeCesar()

function criptografar(){
    for(var i = 0; i < cesar.length; i++){
        if(cesar[i] >= 88 && cesar[i] <= 90){
            criptMensagem += (cesar[i] - 23).toString()
        } else if(cesar[i] >= 120 && cesar[i] <= 122){
        criptMensagem += [cesar[i]].toString()
        }
    }
    alert(criptMensagem);
}

for(var i = 0; i < caracteres.length; i++) {
    var novoAscii = caracteres.charCodeAt(i) + parseInt(novoIncremento);
    if(novoAscii[i] >= 65 && novoAscii[i] < 91){
        cifraCodificar.push(novoAscii); 
    }else if(novoAscii[i] >= 91 && novoAscii[i] < 97){
        novoAscii[i] = 65 + novoInc;
    }else if(novoAscii[i] >= 97 && novoAscii[i] <= 122){
        cifraCodificar.push(novoAscii[i]); 
    }else if(novoAscii[i] > 122){
        novoAscii[i] = 97 + novoInc;
        cifraCodificar.push(novoAscii[i]); 
    }
}

criptografar()