const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagens();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
})
function desselecionarPersonagens() {
    const personagemSelcionado = document.querySelector(".personagem.selecionado");
    personagemSelcionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}