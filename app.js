//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    nomeAmigo = document.querySelector('input').value;//capturar o valor da entrada, validar .value
    if(nomeAmigo === " "){//Em caso de campo vazio
        alert("Insira o nome.");
        return;
    }
    amigos.push(nomeAmigo);//Array para o nomeDoAmigo
    limparCampo();
    console.log(nomeAmigo);
    listamigos();
}

function limparCampo(){
    nomeAmigo = document.getElementById('amigo').value = '';
}

function listamigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    document.querySelector('button-draw');
    if(amigos !== " "){
        let amigoAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[amigoAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}