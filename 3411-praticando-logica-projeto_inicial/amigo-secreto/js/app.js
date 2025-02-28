let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo'); //adiciona amigo
    if (amigo.value == ''){                            //verifica se o campo não esta vazio
        alert('O nome adicionado não é valido! ');
        return;
    }
    if(amigos.includes(amigo.value.toUpperCase())){                  //verifica se o nome já esta presente na lista **LISTA.includes(TERMO)**
        alert ('O nome digitado ja foi adicionado! ')
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value.toUpperCase());                          //adiciona o amigo a lista de amigos
    if (lista.textContent == '') {                     //se for o primeiro, coloca no HTML somente ele
        lista.textContent = amigo.value;
    } else {                                           //do contrario, coloca todo o anterior e mais o atual, praticamente no formato lista = lista + 1
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    
    
}

function sortear() {
    if (amigos.length < 4) {
        alert('Insira pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
       
    }

}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}