function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (ingresso == 'pista'){
        pista(quantidade);
    } else if (ingresso == 'superior'){
        superior (quantidade);
    } else {
        inferior(quantidade);    
    }

}

function pista(quantidade){
    qtpista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtpista>= quantidade){
        qtpista = qtpista - quantidade;
        document.getElementById('qtd-pista').innerHTML = qtpista;
    } else {
        alert('Quantidade indisponivel para a pista')
    }  
}

function superior(quantidade){
    qtsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtsuperior >= quantidade){
        qtsuperior = qtsuperior - quantidade;
        document.getElementById('qtd-superior').innerHTML = qtsuperior;
    }
    else{
        alert('Quantidade indisponivel para as cadeiras superiores');
    } 
}

function inferior(quantidade){
    qtinferior  = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtinferior >= quantidade){
        qtinferior = qtinferior - quantidade;
        document.getElementById('qtd-inferior').innerHTML = qtinferior;

    }else{
        alert('Quantidade indisponivel para as cadeiras inferiores');
    }
}