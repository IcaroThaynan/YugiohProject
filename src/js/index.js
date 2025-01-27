/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder*/

const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let atual = 0;
const btnVoltar = document.getElementById("btn-voltar");

document.getElementById("btn-avancar").addEventListener("click", function () {
    if (atual === cartoes.length - 1) {
        return
    }
    hideSelecionado();
    atual++;
    exibirCarta();

});

document.getElementById("btn-voltar").addEventListener("click", function () {
    if (atual === 0) {
        return;
    }
    cartoes[atual].classList.remove("selecionado")
    atual--;
    exibirCarta();
});

function exibirCarta() {
    cartoes[atual].classList.add("selecionado");
}

function hideSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

