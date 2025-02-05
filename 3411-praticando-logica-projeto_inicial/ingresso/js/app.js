let pista = 100;
let superior = 200;
let inferior = 400;

function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value 
    let quantidade = document.getElementById('qtd').value
    if (ingresso == 'pista'){
        if (pista >= quantidade){
            pista = pista - quantidade;
            document.getElementById('qtd-pista').innerHTML = pista;
        } else {
            alert('Quantidade indisponivel para a pista')
        }  
    } else if (ingresso == 'superior'){
        if (superior >= quantidade){
            superior = superior - quantidade;
            document.getElementById('qtd-superior').innerHTML = superior;
        }
        else{
            alert('Quantidade indisponivel para as cadeiras superiores');
        }
    } else if (ingresso == 'inferior'){
        if (inferior >= quantidade){
            inferior = inferior - quantidade;
            document.getElementById('qtd-inferior').innerHTML = inferior;

        }else{
            alert('Quantidade indisponivel para as cadeiras inferiores');
        }
    }

    }
