var cesar = [];
var criptMensagem = [];
function cifraDeCesar(){
    var mensagem = prompt('Qual a frase que você quer criptografar?');
    var incremento = 3;
    for(var i = 0; i < mensagem.length; i++){
        cesar.push(mensagem.charCodeAt(i) + incremento);
    }
    return cesar
}

cifraDeCesar()

function criptografar(){
    for(var i = 0; i < cesar.length; i++){
        cesar.push(String.fromCharCode(i));
    }
    return cesar;
}

criptografar()
