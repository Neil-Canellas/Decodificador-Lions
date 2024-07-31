const mensagemIn = document.querySelector(".mensagem1");
const mensagemOut = document.querySelector(".mensagem2");
const imagemLeao = document.querySelector(".mensagem2");
const bntCopiar = document.querySelector(".copiar")

//A letra "e" é convertida para "enter"//
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"//

function botaocripto() {
    const textocripto = encriptar(mensagemIn.value);
    mensagemOut.value = textocripto;
    mensagemIn.value = "";

    if (mensagemOut.value !== "") {
        imagemLeao.style.backgroundImage = "none";
    }
}


function encriptar(stringCripto) {
    let codigoBase = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    // console.table(codigoBase);
    stringCripto = stringCripto.toLowerCase();

    for(let i = 0; i < codigoBase.length; i++) {
        if(stringCripto.includes(codigoBase[i][0])) {
            stringCripto = stringCripto.replaceAll(codigoBase[i][0], codigoBase[i][1]);
        }

    }

    return stringCripto;
}

mensagemOut.addEventListener('input', function() {
    if (mensagemOut.value === "") {
        mensagemOut.style.backgroundImage = "url(/Images/rosto-leao-sem-fundo.png)";
    }
});

function botaodescripto() {
    const textodescripto = desencriptar(mensagemIn.value);
    mensagemOut.value = textodescripto;
    mensagemIn.value = "";
}


function desencriptar(stringDescripto) {
    let codigoBase = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    // console.table(codigoBase);
    stringDescripto = stringDescripto.toLowerCase();

    for(let i = 0; i < codigoBase.length; i++) {
        if(stringDescripto.includes(codigoBase[i][1])) {
            stringDescripto = stringDescripto.replaceAll(codigoBase[i][1], codigoBase[i][0]);
        }

    }

    return stringDescripto;
}

bntCopiar.addEventListener('click', function() {
    mensagemOut.select();
    document.execCommand("copy");
});