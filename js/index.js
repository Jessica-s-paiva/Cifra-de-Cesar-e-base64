var cesar = [];
var criptMensagem = [];
function cifraDeCesar(){
    var mensagem = 'oi';
    var incremento = 3;
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

criptografar()
